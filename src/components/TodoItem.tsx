"use client";

import Image from "next/image";

type TodoItemProps = {
  id: string;
  title: string;
  description: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  description,
  complete,
  toggleTodo,
  deleteTodo
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      -<h1>{description}</h1>
      <button className="border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" onClick={()=>{
        deleteTodo(id)
      }}>
        <Image
          src="./delete.svg"
          width={20}
          height={20}
          alt="delete"
        ></Image>
        delete
      </button>
    </li>
  );
}
