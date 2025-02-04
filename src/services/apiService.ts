import axios from "axios";

export default async function fetchCruxData(origin: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_CRUX_API_URL}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        origin: origin,
        formFactor: "DESKTOP",
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
