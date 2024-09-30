"use client"

import { DataTable } from "../data-table";
import {
  ColumnDef,
  Row,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GenericInputModalForm, InputField } from "..";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react";


type Request = {
  id: string;
  name: string;
  summary: string;
  description: string;
  date: string;
  author: string;
  status: "Review" | "Rejected" | "Accepted" | "In Progress" | "Failed" | "Done";
  votes: number;
}

function VoteButton({ row }: { row: Row<Request> }) {
  const [voted, setVoted] = useState(false)
  const [votes, setVotes] = useState(row.original.votes)
  useEffect(() => {
    row.original.votes = votes
  }, [votes, row])
  return (
    <Button variant={voted ? "outline" : "default"} onClick={() => {
      if (!voted) setVotes(old => old + 1)
      else setVotes(old => old - 1)
      setVoted(old => !old)
    }}>
      {votes}
    </Button>
  )
}

const columns: ColumnDef<Request>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'summary',
    header: 'Anliegen'
  },
  {
    accessorKey: 'date',
    header: 'Datum'
  },
  {
    accessorKey: 'author',
    header: 'Autor'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'votes',
    header: 'Votes',
    cell: ({ row }) => {
      return (
        <VoteButton row={row} />
      );
    }
  }
]

const inputForm: InputField[] = [
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    placeholderValue: 'Datenbank Anbindung im TSZ'
  },
  {
    key: 'summary',
    label: 'Zusammenfassung',
    type: 'text',
    placeholderValue: 'Globales speichern der Antraege'
  },
  {
    key: 'description',
    label: 'Beschreibung',
    type: 'textarea',
    placeholderValue: 'Eine ausfuehrliche Beschreibung',
  },
  {
    key: 'author',
    label: 'Autor',
    type: 'text',
    placeholderValue: 'mmustermann@student.tgm.ac.at',
    defaultValue: 'Max Mustermann',
    readonly: true
  },
]


export function Requests() {
  const [data, setData] = useState(
    [
      {
        id: "1",
        name: "DB Sync",
        summary: "Synchronisation der DB mit TSZ",
        description: "Es soll eine Datenbank mit dem TSZ eingebunden wurden, um die Anliegen auch bei jeden anzuzeigen. Dabei sollen die Daten am Schulserver liegen.",
        date: "30.01.2024",
        author: "Ankush Ahuja",
        status: "Review",
        votes: 0
      }
    ]
  )

  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-5 grow">
      <DataTable columns={columns as any} data={data} />
      <Button className="grow" onClick={() => setDialogOpen(true)}>
        <Plus className="mr-1" /> Antrag hinzufügen
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Antrag stellen</DialogTitle>
            <DialogDescription>
              Fülle bitte das Formular aus. Wir werden uns mit dir via E-Mail in Verbindung setzen.
            </DialogDescription>
          </DialogHeader>
          <GenericInputModalForm setData={setData} inputForm={inputForm} setEntry={(entry) => {
            const date = new Date();
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
            let year = date.getFullYear();
            entry['date'] = `${day}.${month}.${year}`
            entry['status'] = 'Review'
            entry['votes'] = 0
          }}>
            <DialogFooter>
              <Button type="submit" onClick={() => setDialogOpen(false)}>Abschicken</Button>
            </DialogFooter>
          </GenericInputModalForm>
        </DialogContent>
      </Dialog>

    </div>
  )
}
