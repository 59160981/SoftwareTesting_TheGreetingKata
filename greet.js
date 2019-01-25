function greet(name) {
    if (name == null) {
        return "Hello, my friend."
    }
    else if (!Array.isArray(name)) {
        const upperCase = name
        if (name == upperCase.toUpperCase()) {
            return `HELLO ${name}!`
        }
        return `Hello, ${name}.`;
    }
    else {

        if (name.length == 2) {
            var arrayFont = name[0];
            var arrayBack = name[1];
            re = /:\s|,\s/;
            var arrayTwoFont = arrayFont.split(re)
            var arrayTwoBack = arrayBack.split(re)
            if (arrayTwoBack.length > 1) {
                return `Hello, ${name[0]}, ${arrayTwoBack[0]}, and ${arrayTwoBack[1]}.`
            }
            else if (arrayTwoFont.length > 1) {
                return `Hello, ${arrayTwoFont[0]}, ${arrayTwoFont[1]}, and ${name[1]}.`
            }
            else {
                return `Hello, ${name[0]} and ${name[1]}.`
            }
        } else if (name.length == 3) {
            var arrayUpperCase = []
            var flag = false
            for (i = 0; i < name.length; i++) {
                var upperCaseInArray = name[i]
                if (upperCaseInArray == name[i].toUpperCase()) {
                    arrayUpperCase.push(`${name[i]}`)
                    name.splice(i, 1)
                    flag = true
                }
            }
            if (flag == true) {
                return `Hello, ${name[0]} and ${name[1]}. AND HELLO ${arrayUpperCase[0]}!`
            } else {
                return `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`
            }
        }
    }
}

module.exports = greet;