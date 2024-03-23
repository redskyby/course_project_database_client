import { $host } from "./index";
import { InterfaceForVaccination } from "../services/interfaces/interfaceForVaccination";

class ZoosApi {
    public async getAllZoos() {
        try {
            const { data } = await $host.get("api/zoos/getAllZoos");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addZoo(vaccination: InterfaceForVaccination) {
        try {
            const { data } = await $host.post("api/zoos/add", vaccination);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editVaccination(vaccination: InterfaceForVaccination) {
        try {
            const { data } = await $host.put("api/zoos/editVaccinationById", vaccination);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteZoo(id: number, dateT: string) {
        try {
            const { data } = await $host.delete(`api/zoos/deleteZoo`, {
                data: {
                    date: dateT,
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

    public async sortVaccination(sortBy: string) {
        try {
            const { data } = await $host.get(`api/zoos/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new ZoosApi();