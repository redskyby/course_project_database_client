import { $host } from "./index";
import { InterfaceForEmployees } from "../services/interfaces/interfaceForEmployees";

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

    public async addEmployee(employee: InterfaceForEmployees) {
        try {
            const { data } = await $host.post("api/employees/add", employee);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editEmployee(employee: InterfaceForEmployees) {
        try {
            const { data } = await $host.put("api/employees/editEmployeeById", employee);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteEmployee(id: number) {
        try {
            const { data } = await $host.delete(`api/employees/delete/?id=${id}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async sortEmployees(sortBy: string) {
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
