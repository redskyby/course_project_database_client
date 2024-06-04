import { $host } from "./index";

class ReportApi {
    public async getReport(id: number) {
        try {
            const { data } = await $host.get(`api/report/report/?id=${id}`, {
                responseType: "blob",
            });

            return data;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new ReportApi();
