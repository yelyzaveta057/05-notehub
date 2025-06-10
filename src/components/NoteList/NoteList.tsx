import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../services/noteService";
import type { Note } from "../../types/note";
import css from "./NoteList.module.css";

interface Props {
  notes: Note[];
}

const NoteList = ({ notes }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  if (!notes || notes.length === 0) return null;

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.text}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.updatedAt.slice(0, 10)}</span>
            <button
              className={css.button}
              onClick={() => handleDelete(note.id)}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "..." : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
