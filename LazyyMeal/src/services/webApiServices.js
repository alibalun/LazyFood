const url = "https://krkgzsdq-7140.euw.devtunnels.ms/favorites";
const url2 = "https://krkgzsdq-7140.euw.devtunnels.ms/favorite";
export const _addItem = async (orderId, title, imagePath, email) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            // mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Bypass-Tunnel-Reminder': 'true' // Include this header if needed
            },
            body: JSON.stringify({
                orderId: orderId,
                title: title,
                imagePath: imagePath,
                email: email
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${data.message}`);
        }
        return data.hasFavorite;
    } catch (error) {
        console.error("Error:", error.message);
    }
}


export const _removeItem = async (orderId, email) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderId: orderId,
                email: email
            })
        });

        if (!response.ok) {
            const data = response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${data.message}`);
        }

        // Silme işlemi başarıyla tamamlandıktan sonra getItems() fonksiyonunu çağırabilirsiniz.
        await getItems();
    } catch (error) {
        console.error("Error:", error.message);
    }
}


export const getItems = async (email) => {
    try {
        let response = await fetch(url + '?email=' + email, {
            method: 'GET',
            headers: {
                "Bypass-Tunnel-Reminder": "true"
            }
        });

        if (!response.ok) {
            // throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.ok) {
            var data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Error in getItems:", error.message);
        throw error; // rethrow the error to propagate it to the caller
    }
}


export const getFavorite = async (orderId, email) => {
    try {
        let response = await fetch(url2 + "?orderId=" + orderId + "&email=" + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        var data = await response.json();
        return data
    }
    catch (error) {
        console.log(error);
    }
}