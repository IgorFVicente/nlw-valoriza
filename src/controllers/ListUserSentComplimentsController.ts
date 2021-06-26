import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";

class ListUserSentComplimentsController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSentComplimentService = new ListUserSentComplimentsService();

        const compliments = await listUserSentComplimentService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSentComplimentsController }