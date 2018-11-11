
export class SlaveService {
    getCities() {
        return [
            {
                "id": 1, "country_id": 1, "title": "London", "desc": ""
            },
            {
                "id": 2, "country_id": 1, "title": "Liverpool", "desc": "" 
            },
            {
                "id": 3, "country_id": 2, "title": "Paris", "desc": ""
            },
            {
                "id": 4, "country_id": 3, "title": "Madrid", "desc": ""
            },
            {
                "id": 5, "country_id": 4, "title": "Berlin", "desc": ""
            },
            { 
                "id": 6, "country_id": 4, "title": "Munich", "desc": ""
            },
            {
                "id": 7, "country_id": 4, "title": "Hamburg", "desc": ""
            }
        ];
    }
}