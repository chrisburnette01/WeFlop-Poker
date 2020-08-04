// import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const sendFeedbackRequest = async (payload) => {
    /*try {
		const result = await axios.post("/signup", payload);
		return result.data;
	} catch (e) {
		throw Error(e);
	}*/

    await wait(4000);

    return {
    };
};

export const getUpdatesRequest = async (payload) => {
    /*try {
        const result = await axios.post("/signup", payload);
        return result.data;
    } catch (e) {
        throw Error(e);
    }*/

    // await wait(4000);
    
    const updates = [
        {
            title: 'Patch Notes v1.01',
            content: `Added a new music track
                Implemented bet size customization that - filler that mimicks a two line input - * - filler ends up going onto the next line and expanding the line to the left.
                Fixed bug that hid fold button in all-in situations`,
            type: 'text',
            optionalText: 'Optional text',
            date: Date.now(),
        },
        {
            title: 'Poll: What should our next feature be?',
            content: {
                options: [
                    { title: 'Each of these bubbles are interactive', votes: 50 },
                    { title: 'Voting choice', votes: 20 },
                    { title: 'Voting choice', votes: 150 }
                ]
            },
            optionalText: 'Optional text below the poll. If this text is added, then it is 12px below the poll question.',
            type: 'poll',
            date: Date.now(),
        },
        {
            title: 'Patch Notes v1.01',
            content: `Added a new music track
                Implemented bet size customization that - filler that mimicks a two line input - * - filler ends up going onto the next line and expanding the line to the left.
                Fixed bug that hid fold button in all-in situations`,
            type: 'text',
            optionalText: 'Optional text',
            date: Date.now(),
        },
        {
            title: 'Poll: What should our next feature be?',
            content: {
                options: [
                    { title: 'Each of these bubbles are interactive', votes: 50 },
                    { title: 'Voting choice', votes: 20 },
                    { title: 'Voting choice', votes: 150 }
                ]
            },
            optionalText: 'Optional text below the poll. If this text is added, then it is 12px below the poll question.',
            type: 'poll',
            date: Date.now(),
        }
    ];

    return {
        updates
    };
};

export const votePollRequest = async (payload) => {
    /*try {
        const result = await axios.post("/signup", payload);
        return result.data;
    } catch (e) {
        throw Error(e);
    }*/

    await wait(4000);

    return {
    };
};