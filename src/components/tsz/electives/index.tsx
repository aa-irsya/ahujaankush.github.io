"use client"

import { DataTable } from "../data-table";
import {
  ColumnDef,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


type Elective = {
  id: string;
  name: string;
  description: string;
  time: string;
  teacher: string;
  students : string[];
  notes : string
}

const columns: ColumnDef<Elective>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'time',
    header: 'Zeitpunkt'
  },
  {
    accessorKey: 'teacher',
    header: 'Lehrkraft'
  },
  {
    accessorKey: 'notes',
    header: 'Notizen'
  }
]

export function Electives() {
  let data: Elective[] = [
    {
      id: "1",
      name: "Robotik",
      notes: "",
      description: "Robotik Freigegenstand zur Teilnahme an Wettbewerben.",
      time: "Fr. 18 Uhr",
      teacher: "Clemens Koza",
      students: ["Ankush Ahuja", "Franz Puerto", "Leopold Kernegger"],
    }
  ]

  return (
    <div className="flex flex-col space-y-5 grow">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
