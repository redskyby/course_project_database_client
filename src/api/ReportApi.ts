import { ListFormat } from "typescript";
import { $host } from "./index";
import { log } from "console";

class ReportApi {
    public async getReport(id: number) {
        try {
            const { data } = await $host.get(`api/report/report/?id=${id}`);

            return data;

            /*const response =await fetch(`http:localhost:5000api/report/report/?id=${id}`)

            const blod = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blod)
        const link = document.createElement('a')
        link.href = downloadUrl;
        link.download = "test";
        document.body.appendChild(link)
        link.click()
        link.remove()
console.log(downloadUrl)*/


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert("Данные не верны");
        }
    }
}

export default new ReportApi();
