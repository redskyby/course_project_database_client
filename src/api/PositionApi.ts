import { $host } from "./index";
import { IntefracesForFeed } from "../services/intefracesForFeed";
import { InterfaceForPosition } from "../services/interfaceForPosition";

class PositionApi {
    public async getAllPositions() {
        try {
            const { data } = await $host.get("api/position/getAllPositions");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addPosition(position: InterfaceForPosition) {
        try {
            const { data } = await $host.post("api/position/add", position);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editFeed(feed: IntefracesForFeed) {
        try {
            const { data } = await $host.put("api/position/editFeedById", feed);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deletePosition(id: number) {
        try {
            const { data } = await $host.delete(`api/position/deletePosition/?id=${id}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async sortFeed(sortBy: string) {
        try {
            const { data } = await $host.get(`api/position/sortBy/?sort=${sortBy}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }
}

export default new PositionApi();
