import { API_URL } from "../constants";
import type {
  Character,
  RickAndMortyResponse,
} from "../interface/rickAndMortyType";

export async function getAllCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(`${API_URL}/character`);
    const { results } = (await response.json()) as RickAndMortyResponse;
    return results;
  } catch (err) {
    return [];
  }
}

export async function getCharacterById(
  id: string | number
): Promise<Character> {
  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    const character = (await response.json()) as Character;
    return character;
  } catch (err) {
    return {} as Character;
  }
}
