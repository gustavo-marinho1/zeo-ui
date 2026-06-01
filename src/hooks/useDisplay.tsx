import { useEffect } from "react";

interface Props {
  id: string,
  isOpen: boolean,
  close: () => void
}

export default function useDisplay({ id, isOpen, close }: Props) {

  // close when press ESC
  useEffect(() => {
    const screen = document.getElementById(id);
    if (!screen || !isOpen) return;

    const closeShopOptions = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', closeShopOptions)
    return () => window.removeEventListener('keydown', closeShopOptions)
  }, [close]);

  // close when click outside
  // useEffect(() => {
  //   const screen = document.getElementById(id);
  //   if (!isOpen) return;

  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (event.target && !screen.contains(event.target as Node)) close()
  //   }

  //   document.addEventListener('click', handleClickOutside)
  //   return () => document.removeEventListener('click', handleClickOutside)
  // }, [close]);

}