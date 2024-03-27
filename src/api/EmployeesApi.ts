import { $host } from "./index";
import { InterfaceForZoos } from "../services/interfaces/interfaceForZoos";

class EmployeesApi {
    public async getAllEmployees() {
        try {
            const { data } = await $host.get("api/employees/getAll");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addZoo(zoo: InterfaceForZoos) {
        try {
            const { data } = await $host.post("api/employees/add", zoo);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editZoo(zoo: InterfaceForZoos) {
        try {
            const { data } = await $host.put("api/employees/editZooById", zoo);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteZoo(id: number, dateT: string) {
        try {
            const { data } = await $host.delete(`api/employees/deleteZoo`, {
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

    public async sortZoo(sortBy: string) {
        try {
            const { data } = await $host.get(`api/employees/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new EmployeesApi();
