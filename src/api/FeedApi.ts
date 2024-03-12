import { $host } from "./index";
import {IntefracesForFeed} from "../services/intefracesForFeed";


class FeedApi {
    public async getAllFeeds() {
        try {
            const { data } = await $host.get("api/animal/getAll");

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async addFeed(feed : IntefracesForFeed) {
        try {
            const { data } = await $host.post("api/animal/add", feed);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    }

    public async editFeed(feed : IntefracesForFeed) {
        try {
            const { data } = await $host.put("api/animal/editAnimalById", feed);

            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async deleteFeed(id: number) {
        try {
            const { data } = await $host.delete(`api/animal/delete/?id=${id}`);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.response.data);
            alert(e.response.data.message);
        }
    }

    public async sortFeed(sortBy: string) {
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

export default new FeedApi();
