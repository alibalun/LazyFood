var clickState = false;

export const titleControl = (item) => {
    return (
        item.snippet.title !== 'VR180' &&
        item.snippet.title !== 'Tost Ekmeği İle Yapılan Tarifler' &&
        item.snippet.title !== 'Shorts' &&
        item.snippet.title !== 'İftar Yemekleri' &&
        item.snippet.title !== 'İftar Menüleri' &&
        item.snippet.title !== 'Islak Kurabiye Tarifleri' &&
        item.snippet.title !== 'Pratik Yemek Tarifleri' &&
        item.snippet.title !== 'Yemek Tarifleri' &&
        item.snippet.title !== 'Cheesecake ve Tiramisu Pastayı bir de böyle deneyin!' &&
        item.snippet.title !== 'Kuru Mayalı Poğaça Tarifleri' &&
        item.snippet.title !== 'Yeni Yıla Afiyetle Girin Afiyette Kalın: Yılbaşı Menüsü' &&
        item.snippet.title !== 'Yemeye Kıyamayacağınız Tatlı Sürprizler: Yılbaşı Kurabiyeleri'
    );
};


export const getMealInfoRgx = (metin) => {
    // const metin = `15 dakikada hazırlayabileceğiniz, çok mu çok lezzetli fındık lahmacunları sizlerde evlerinizde yapmak istemez misiniz? Yapımı aşırı kolay bu lahmacunların ufak tefek olduğuna bakmayın lezzeti kendinden çok çok büyük. :) Gün menülerinize de rahatlıkla ekleyebileceğiniz,  hazır yufkadan hazırlayacağınız fındık lahmacunları sizlerde çok seveceksiniz. Dışarıda yediklerinizden çok daha lezzetli olan bu lahmacunların yanına birde bol köpüklü buz gibi bir ayran olursa değmesin kimse keyfinize. O zaman ne yapıyoruz? çıkartıyoruz malzemelerimizi hazırlıyoruz, telefonu da sabit bir yere koyup hem sizler için hazırladığımız fındık lahmacun nasıl yapılır? videosunu izliyor aynı zamanda da yapıyoruz. Tarifi bir yerlere not etmeyi ve evlerinizde denemeyi unutmayın, pişman olmazsınız. Deneyeceklere şimdiden afiyet olsun. :)
    if (metin !== undefined) {

        // Kişi Sayısı Ayırma:
        const kisiSayisiRegex = /(\d+)-(\d+)\s+Kişilik/i;
        const kisiSayisiMatches = metin.match(kisiSayisiRegex);
        const minKisiSayisi = kisiSayisiMatches ? kisiSayisiMatches[1] : null;
        const maxKisiSayisi = kisiSayisiMatches ? kisiSayisiMatches[2] : null;

        // Hazırlama ve Pişirme Süresi Ayırma:
        const hazirlamaRegex = /Hazırlama:\s*(\d+)\s*Dakika/i;
        const pisirmeRegex = /Pişirme:\s*(\d+)\s*Dakika/i;
        const hazirlamaMatches = metin.match(hazirlamaRegex);
        const pisirmeMatches = metin.match(pisirmeRegex);
        const hazirlamaSuresi = hazirlamaMatches ? hazirlamaMatches[1] : null;
        const pisirmeSuresi = pisirmeMatches ? pisirmeMatches[1] : null;

        // Malzemeler ve Hazırlanışı bölümlerini bulma
        const malzemelerIndex = metin.indexOf("Malzemeler");
        const hazirlanisiIndex = metin.indexOf("Hazırlanışı");
        const afiyetOlsunIndex = metin.indexOf("#");

        // Malzemeler bölümü
        const malzemeler = malzemelerIndex !== -1 && hazirlanisiIndex !== -1
            ? metin.substring(malzemelerIndex + "Gerekli Malzemeler".length, hazirlanisiIndex).trim()
            : null;

        // Hazırlanışı bölümü (sonraki bölümleri içermeyecek şekilde)
        const hazirlanisi = hazirlanisiIndex !== -1 && afiyetOlsunIndex !== -1
            ? metin.substring(hazirlanisiIndex + "Hazırlanışı".length, afiyetOlsunIndex).trim()
            : (hazirlanisiIndex !== -1 ? metin.substring(hazirlanisiIndex + "Hazırlanışı".length).trim() : null);

        return {
            minKisiSayisi,
            maxKisiSayisi,
            hazirlamaSuresi,
            pisirmeSuresi,
            malzemeler,
            hazirlanisi
        }
    }
}

export const handleClick = () => {
    clickState == false ? clickState=true : clickState=false;

    return clickState;
}