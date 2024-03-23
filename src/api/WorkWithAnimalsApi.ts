import { $host } from "./index";
import { InterfaceForWorkWithAnimals } from "../services/interfaces/interfaceForWorkWithAnimals";

class WorkWithAnimalsApi {
    public async getAllWorkWithAnimals() {
        try {
            const { data } = await $host.get("api/workWithAnimals/getAllWorkWithAnimals");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addWorkWithAnimals(workWithAnimals: InterfaceForWorkWithAnimals) {
        try {
            const { data } = await $host.post("api/workWithAnimals/add", workWithAnimals);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editWithAnimals(withAnimals: InterfaceForWorkWithAnimals) {
        try {
            const { data } = await $host.put("api/workWithAnimals/editWorkWithAnimalsById", withAnimals);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteWorkWithAnimal(id: number) {
        try {
            const { data } = await $host.delete(`api/workWithAnimals/deleteWorkWithAnimals`, {
                data: {
                    idAnimal: id,
                },
            });
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async sortWorkWithAnimals(sortBy: string) {
        try {
            const { data } = await $host.get(`api/workWithAnimals/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new WorkWithAnimalsApi();
