"use client"
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import {useState, Fragment} from 'react'
import {manufacturer} from "@/constants"
import Image from 'next/image'

const SearchManufacturer = ( {manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState ("")
  const filteredManufacturers = query === "" ? 
  manufacturer : manufacturer.filter
  ((item)) =>



  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="realtive w-full"> 
        <Combobox.Button className="absolute top-[14px]">
        <Image
        src="/car-logo.png"
        alt="car logo"
        width={20}
        height={20}
        className="ml-4"
        />
        </Combobox.Button>
        <Combobox.Input 
        className="search-manufacturer__input"
        placeholder="Suzuki Mehran"
        displayValue={(manufacturer: string) => manufacturer }
        onChange={(e) =>  setQuery(e.target.value)}
        />
        <Transition
        as={Fragment }
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")}
        >
        <Combobox.Options>

        </Combobox.Options> 
        </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer