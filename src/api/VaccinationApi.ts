import { $host } from "./index";
import { InterfaceForVaccination } from "../services/interfaces/interfaceForVaccination";

class VaccinationApi {
    public async getAllVaccinations() {
        try {
            const { data } = await $host.get("api/vaccination/getAllVaccinations");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async addVaccination(vaccination: InterfaceForVaccination) {
        try {
            const { data } = await $host.post("api/vaccination/add", vaccination);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async editVaccination(vaccination: InterfaceForVaccination) {
        try {
            const { data } = await $host.put("api/vaccination/editVaccinationById", vaccination);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteVaccination(id: number, dateT: string) {
        try {
            const { data } = await $host.delete(`api/vaccination/deleteVaccination`, {
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
            const { data } = await $host.get(`api/vaccination/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new VaccinationApi();
