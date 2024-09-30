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

type Tution = {
  id: string;
  subject: string;
  description: string;
  student: string;
  location: string;
  time: string;
  cost: number;
}

const inputForm: InputField[] = [
  {
    key: 'subject',
    label: 'Fach',
    type: 'text',
    placeholderValue: 'Rizzologie'
  },
  {
    key: 'description',
    label: 'Beschreibung',
    type: 'text',
    placeholderValue: 'Mathematik-Nachhilfe 1-3. Klasse.'
  },
  {
    key: 'student',
    label: 'Angeboten von',
    type: 'text',
    readonly: true,
    placeholderValue: 'mmustermann@student.tgm.ac.at',
    defaultValue: 'mmustermann@student.tgm.ac.at'
  },
  {
    key: 'time',
    label: 'Zeit',
    type: 'text',
    placeholderValue: 'Do. 11 Uhr'
  },
  {
    key: 'location',
    label: 'Ort',
    type: 'text',
    placeholderValue: 'TGM'
  },
  {
    key: 'cost',
    label: '€/Stunde',
    type: 'number',
    placeholderValue: 10
  },
]

const columns: ColumnDef<Tution>[] = [
  {
    accessorKey: 'subject',
    header: 'Fächer'
  },
  {
    accessorKey: 'description',
    header: 'Beschreibung'
  },
  {

    accessorKey: 'student',
    header: 'Schüler'
  },
  {
    accessorKey: 'location',
    header: 'Ort'
  },
  {
    accessorKey: 'time',
    header: 'Zeitpunkt'
  },
  {
    accessorKey: 'cost',
    header: "Kosten"
  }
]

export function Tution() {
  const [data, setData] = useState([
    {
      id: '1',
      subject: "Mathematik",
      description: "Olympionike gibt Nachhilfe fuer 1-4 Jahrgang.",
      student: "Ankush Ahuja",
      location: "Reumannplatz",
      time: "25 Uhr",
      cost: 15
    }
  ])

  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-5 grow">
      <DataTable columns={columns} data={data} />
      <Button className="grow" onClick={() => setDialogOpen(true)}>
        <Plus className="mr-1" /> Nachhilfe geben
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nachhilfe anbieten</DialogTitle>
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
    </div>
  )
}
