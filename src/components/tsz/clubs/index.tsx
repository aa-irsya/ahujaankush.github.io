"use client"

import { DataTable } from "../data-table";
import {
  ColumnDef,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { GenericInputModalForm, InputField } from "..";

type Elective = {
  id: string;
  name: string;
  description: string;
  time: string;
  organization: string;
  students: string[];
  notes: string
}

const inputForm: InputField[] = [
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    placeholderValue: 'Langschwerts Kueche'
  },
  {
    key: 'description',
    label: 'Beschreibung',
    type: 'text',
    placeholderValue: 'Wir bereiten jeden Donnerstag Thunfisch Salat zu.'
  },
  {
    key: 'time',
    label: 'Zeitpunkt',
    type: 'text',
    placeholderValue: 'Do. 18-19 Uhr'
  },
  {
    key: 'organization',
    label: 'Organisation',
    type: 'text',
    readonly: true,
    placeholderValue: 'mmustermann@student.tgm.ac.at',
    defaultValue: 'Max Mustermann'
  },
  {
    key: 'notes',
    label: 'Notizen',
    type: 'text',
    placeholderValue: 'Irgendwas wichtiges?'
  },

]

const columns: ColumnDef<Elective>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'description',
    header: 'Beschreibung'
  },
  {
    accessorKey: 'time',
    header: 'Zeitpunkt'
  },
  {
    accessorKey: 'organization',
    header: 'Organisation'
  },
  {
    accessorKey: 'notes',
    header: 'Notizen'
  }
]

export function Clubs() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Langschwerts Kueche",
      description: "Thunfisch Salat fuer alle.",
      time: "Fr. 18 Uhr",
      organization: "Ankush Ahuja",
      students: ["Ankush Ahuja", "Alfred Pesek", "Johann Langschwert"],
      notes: "Kosten werden geteilt.",
    }
  ])
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-5 grow">
      <DataTable columns={columns} data={data} />
      <Button className="grow" onClick={() => setDialogOpen(true)}>
        <Plus className="mhtmlr-1" /> Club beantragen
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Club beantragen</DialogTitle>
            <DialogDescription>
              Fülle bitte das Formular aus. Wir werden uns mit dir via E-Mail in Verbindung setzen.
            </DialogDescription>
          </DialogHeader>
          <GenericInputModalForm setData={setData} inputForm={inputForm}>
            <DialogFooter>
              <Button type="submit" onClick={() => setDialogOpen(false)}>Abschicken</Button>
            </DialogFooter>
          </GenericInputModalForm>
        </DialogContent>
      </Dialog>
    </div >
  )
}
