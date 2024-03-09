import { $host } from "./index";
import { FormDatForAddAnimalModal } from "../services/interfaces";

class AnimalApi {
    public async getAllAnimals() {
        try {
            const { data } = await $host.get("api/animal/getAll");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addAnimal(animal: FormDatForAddAnimalModal) {
        try {
            const { data } = await $host.post("api/animal/add", animal);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }
}

export default new AnimalApi();
