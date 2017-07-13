/**
 * 
 * @param {dict} generalInfo 
 * @param {list[dict]} downloadInfo 
 * @param {dict} detailInfo 
 */
let generateData = function(generalInfo,downloadInfo,detailInfo){
    data = generalInfo;
    data.download = downloadInfo;
    data.info = detailInfo;
    return data;
}

/**
 * 
 * @param {string} title 
 * @param {string} synopsis 
 * @param {string} cover 
 * @param {list[string]} picture 
 */
let setGeneralInfo = function(title,synopsis,cover,picture){
    let data = {};
    data.title = title;
    data.synopsis = synopsis;
    data.cover = cover;
    data.picture = picture;
    return data;
}

/**
 * 
 * @param {string} name 
 * @param {number} size 
 * @param {string} url 
 * @param {list[string]} system 
 */
let setDonwloadInfo = function(name, size, url, system){
    data = {};
    data.name = name;
    data.size = size;
    data.link = url;
    data.system = system;
    return data;
}

/**
 * 
 * @param {list[string]} genre 
 * @param {list[string]} developer 
 * @param {list[string]} editor 
 * @param {list[string]} audio 
 * @param {list[string]} subtitle 
 * @param {list[string]} system 
 * @param {date} releaseDate 
 */
let setDetailData = function(genre,developer,editor,audio,subtitle,system,releaseDate){
    data = {};
    data.genre = genre;
    data.developer = developer;
    data.editor = editor;
    data.audio = audio;
    data.subtitle = subtitle;
    data.system = system;
    data.release = release;
    return data;
}