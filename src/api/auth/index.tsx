// import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const signUpRequest = async (payload) => {
    /*try {
		const result = await axios.post("/signup", payload);
		return result.data;
	} catch (e) {
		throw Error(e);
	}*/

    await wait(4000);

    return {
        token: 'test',
        firstName: 'Test',
    };
};
