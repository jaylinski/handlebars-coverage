const Handlebars = require("handlebars");

module.exports = {
    process(sourceText, sourcePath, options) {
        const { code, map } = Handlebars.precompile(sourceText, { srcName: sourcePath });

        return {
            code: `module.exports = ${code};`,
            map,
        };
    },
};