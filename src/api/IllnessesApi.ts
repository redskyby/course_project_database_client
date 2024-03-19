import { $host } from "./index";
import { InterfacesForIllnesses } from "../services/interfaces/interfacesForIllnesses";

class IllnessesApi {
    public async getAllIllnesses() {
        try {
            const { data } = await $host.get("api/illnesses/getAllIllnesses");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addIllnesses(illnesses: InterfacesForIllnesses) {
        try {
            const { data } = await $host.post("api/illnesses/add", illnesses);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editIllnesses(illnesses: InterfacesForIllnesses) {
        try {
            const { data } = await $host.put("api/illnesses/editIllnessById", illnesses);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteIllnesses(id: number, dateT: string) {
        try {
            const { data } = await $host.delete(`api/illnesses/deleteIllness`, {
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

    public async sortIllnesses(sortBy: string) {
        try {
            const { data } = await $host.get(`api/illnesses/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new IllnessesApi();
