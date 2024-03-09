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

    public async editAnimal(animal: FormDatForAddAnimalModal) {
        try {
            const { data } = await $host.put("api/animal/editAnimalById", animal);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteAnimal(id: number) {
        try {
            const { data } = await $host.delete(`api/animal/delete/?id=${id}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async sortAnimals(sortBy: string) {
        try {
            const { data } = await $host.get(`api/animal/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new AnimalApi();
