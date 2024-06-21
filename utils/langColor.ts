const langColor = {
    '1c': {
        color: '#d71921',
        bgColor : '#ff1d27' 
    },
    'typescript': {
        color: '#3178c6',
        bgColor : '#3f9aff'
    },
    'php': {
        color: '#4f5b93', // 4f5b93
        bgColor : '#7a86b8'
    },
    'python': {
        color: '#3572a5',
        bgColor : '#4da6f1'
    },
    'golang': {
        color: '#79c3ff',
        bgColor : '#79d4fd'
    },
    'node.js': {
        color: '#5fa04e',
        bgColor : '#8cec73'      
    },
    'java': {
        color: '#b07219',
        bgColor : '#fca323'
    },
    'angular': {
        color: '#a6120d',
        bgColor : '#dd1b16'
    },
    'react': {
        color: '#087ea4',
        bgColor : '#0bb8f0'
    },
    'vue': {
        color: '#2c3d4f',
        bgColor : '#3dd491'
    },
    'kotlin': {
        color: '#a97bff',
        bgColor : '#ba7bff'
    },
    'c++': {
        color: '#004283',
        bgColor : '#0055a9'
    },
    'dart': {
        color: '#04599c',
        bgColor : '#40c4ff'
    },
    'swift': {
        color: '#f05138',
        bgColor : '#ff703b'
    },
    'flutter': {
        color: '#04599c',
        bgColor : '#40c4ff'
    },
    'javascript': {
        color: '#f7e018',
        bgColor : '#f8ff18'
    },
    'rust': {
        color: '#dea584',
        bgColor : '#ffcb97'
    },
    'ruby': {
        color: '#701516',
        bgColor : '#bc2325'
    },
    '.net': {
        color: '#7015e8',
        bgColor : '#9a17ff'
    }
}

export function getColorsByLanguages(language: string): string{
    // console.log(language)
    const lang = language.toLowerCase().split(' ')[0];
    if (langColor[lang]) {
        return langColor[lang].color;
    } else {
        return 'Language not found';
    }
}
export function getColorsBgByLanguages(language: any) {
    const lang = language.toLowerCase().split(' ')[0];
    if (langColor[lang]) {
        return langColor[lang].bgColor;
    } else {
        return 'Language not found';
    }
}