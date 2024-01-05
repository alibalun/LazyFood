import { getMealInfoRgx, titleControl } from "./services";

export const channelIDNYT = "UCeh3XQszWO6lLdKz_SZmm1Q"; // Nefis yemek tarifleri
export const channelIDA = "UCJ5KzVnmaIIVyLQUCRii2uw"; // Arda'nın mutfağı
export const channelIDY = "UCWA2nh0yrIMC6uG0hfbucRQ"; // yemekcom
export const channelIDR = "UCO3MaQR-Vh6cgBZRlD44jWg"; // Refika'nın mutfagı

export const apiKey = "AIzaSyBk1Bwbn1A-dakmipdDKFhcd6DW1Mkg1eM";

export const getProductInformation = async (itemId) => {
    try {
        var productInfo;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${itemId}&key=${apiKey}&part=snippet,contentDetails,statistics`);
        const responseBody = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        if (!responseBody.trim()) {
            throw new Error('Empty response body');
        }
        if (responseBody != null) {
            const data = JSON.parse(responseBody);
            var regx_obj = getMealInfoRgx(data.items[0].snippet.description);
            productInfo = {
                image: data.items[0].snippet.thumbnails.medium.url !== null ? data.items[0].snippet.thumbnails.medium.url : null,
                title: data.items[0].snippet.title !== null ? data.items[0].snippet.title : null,
                subtitle: 'Subtitle',
                personCount: regx_obj.minKisiSayisi !== null && regx_obj.maxKisiSayisi !== null ? regx_obj.minKisiSayisi + '-' + regx_obj.maxKisiSayisi : null,
                prepTime: regx_obj.hazirlamaSuresi !== null ? regx_obj.minKisiSayisi : null,
                cookTime: regx_obj.pisirmeSuresi !== null ? regx_obj.pisirmeSuresi : null,
                foods: regx_obj.malzemeler !== null ? regx_obj.malzemeler : null,
                prepContent: regx_obj.hazirlanisi !== null ? regx_obj.hazirlanisi : null
            };
        }


        return productInfo;
    } catch (error) {
        console.error('Error fetching product information:', error);
        // Handle the error or throw it again depending on your requirements.
    }
};

export const getPlayListInfo = async (playListId) => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&key=${apiKey}&maxResults=50`);
        const data = await response.json();
        const items = data.items;
        return items;
    } catch (error) {
        console.error('Error fetching playlist information:', error);
        // Handle the error or throw it again depending on your requirements.
    }
};

export const getAllVideosWithSearch = async () => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=yemek%20tarifleri&type=video&key=${apiKey}&maxResults=10`);
        const data = await response.json();
        const videos = data.items;
        return videos;
    } catch (error) {
        console.error('Error fetching videos with search:', error);
        // Handle the error or throw it again depending on your requirements.
    }
};

export const getOrderTitle = async (filterText, channelId) => {
    try {
        var new_items = [];
        var filterItems;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&key=${apiKey}&maxResults=114`);
        if (response != null) {
            const data = await response.json();
            data.items.map((item) => {
                if (titleControl(item)) {
                    new_items.push(item);
                }
            });
            var value = new_items.filter((playlist) =>
                playlist.snippet.title.includes(filterText)
            );
            if (value.length == 0) {
                filterItems = data.items;
            }
            else if (value.length > 0) {
                filterItems = value;
            }
        }

        return filterItems != null ? filterItems : '';
    } catch (error) {
        console.error('Error fetching order title:', error);
        // Handle the error or throw it again depending on your requirements.
    }
};
