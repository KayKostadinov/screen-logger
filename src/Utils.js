const Utils = {
    zamundaMovie(title) {
        const sanitized = title?.split(' ')?.join('+');
        return `https://zamunda.net/bananas?c5=1&c19=1&c24=1&c25=1&c28=1&c31=1&c35=1&search=${sanitized}&gotonext=1&incldead=&field=name`
    },
    zamundaSeries(title) {
        const sanitized = title?.split(' ')?.join('+');
        return `https://zamunda.net/bananas?c7=1&c33=1&search=${sanitized}&gotonext=1&incldead=&field=name`
    },
    imdbLink(id) {
        return 'https://www.imdb.com/title/' + id;
    },
    trimString(str, wordCount) {
        if (!str) return;
        const split = str.split(" ");

        if (split.length > wordCount) {
            return split.slice(0, wordCount).join(" ") + "...";
        }

        return str;
    },
}

export default Utils;