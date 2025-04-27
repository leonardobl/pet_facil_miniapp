import { useCallback } from "react";

export const useLocalStorage = () => {
  const setItem = useCallback((label: string, value: unknown) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(label, serializedValue);
    } catch (error) {
      console.error(`Erro ao salvar o valor no localStorage:`, error);
    }
  }, []);

  const getItem = useCallback(<T = unknown>(label: string): T | null => {
    try {
      const item = localStorage.getItem(label);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Erro ao buscar o valor do localStorage:`, error);
      return null;
    }
  }, []);

  return { setItem, getItem };
};
