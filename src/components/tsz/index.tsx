"use client"

import { useAtom } from "jotai/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { atomWithStorage } from 'jotai/utils'
import { Requests } from "./requests";
import { Todo } from "./todo";
import { Electives } from "./electives";
import { Clubs } from "./clubs";
import { Tution } from "./tution";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const tszTabAtom = atomWithStorage('tszTab', "requests");

export type InputField = {
  key: string
  label: string
  type: HTMLInputTypeAttribute | 'textarea'
  placeholderValue?: any
  defaultValue?: any
  readonly?: boolean
}

export function GenericInputModalForm({ children, inputForm, setData, setEntry }: { children: React.ReactNode, inputForm: InputField[], setData: Function, setEntry?: (entry: any) => void }) {
  return (<form action={(formData) => {
    const entry = {}
    inputForm.forEach((e) => {
      (entry as any)[e.key] = formData.get(e.key);
    });
    (entry as any)['id'] = Math.random();
    if(setEntry) setEntry(entry)
    setData((old: any) => [...old, entry])
  }}>
    <div className="grid gap-4 py-4">
      {
        inputForm.map((e, i) => (
          <div className="grid grid-cols-4 items-center gap-4" key={`Input-Item-Clubs-${i}`}>
            <Label htmlFor={e.key} className="text-left">
              {e.label}
            </Label>
            {e.type == 'textarea' ?
              <Textarea name={e.key}
                placeholder={e.placeholderValue}
                defaultValue={e.defaultValue}
                readOnly={e.readonly}
                className="col-span-4"
              />
              :
              <Input
                name={e.key}
                type={e.type}
                placeholder={e.placeholderValue}
                defaultValue={e.defaultValue}
                readOnly={e.readonly}
                className="col-span-4"
              />
            }
          </div>
        ))
      }
    </div>
    {children}
  </form>)

}

const items = [
  {
    key: 'requests',
    name: 'Anträge',
    component: <Requests />
  },
  {
    key: 'todo',
    name: 'SV ToDo',
    component: <Todo />
  },
  {
    key: 'electives',
    name: 'Freigegenstände',
    component: <Electives />
  },
  {
    key: 'clubs',
    name: 'Clubs',
    component: <Clubs />
  },
  {
    key: 'tution',
    name: 'Nachhilfe',
    component: <Tution />
  },
]

function find_tab_content(key: string) {
  let content = <></>
  for (let i = 0; i < items.length; ++i) {
    if (items[i].key == key) {
      content = items[i].component;
      break;
    }
  }
  return content;
}

export default function TSZ() {

  const [tszTab, setTszTab] = useAtom<string>(tszTabAtom);

  return (
    <>
      <Tabs value={tszTab} onValueChange={(value) => setTszTab(value)} className="hidden md:flex grow flex-col space-y-5">
        <TabsList className="flex grow [&>*]:grow">
          {
            items.map((e, i) => (
              <TabsTrigger value={e.key} key={`tsz-tab-${i}`}>{e.name}</TabsTrigger>
            ))
          }
        </TabsList>
        {
          items.map((e, i) => (
            <TabsContent value={e.key} key={`tsz-content-${i}`}>{e.component}</TabsContent>
          ))
        }
      </Tabs>
      <div className="flex flex-col space-y-5 grow md:hidden">
        <Select value={tszTab} onValueChange={(value) => setTszTab(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            {
              items.map((e, i) => (
                <SelectItem value={e.key} key={`tsz-selectable-${i}`}>{e.name}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>
        {find_tab_content(tszTab)}
      </div>
    </>
  )
}
