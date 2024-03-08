export default function localDate(date: string): string {
    const localData = new Date(date);

    return localData.toLocaleDateString();
}
