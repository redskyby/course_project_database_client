import { $host } from "./index";

class AnimalApi {
    public async getAllAnimals() {
        try {
            const { data } = await $host.get("api/animal/getAll");

            return data;
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }
}

export default new AnimalApi();
