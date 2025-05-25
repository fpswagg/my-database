"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
exports.turnUserMetadataFromDB = turnUserMetadataFromDB;
exports.turnServiceFromDB = turnServiceFromDB;
exports.createUserMetadata = createUserMetadata;
exports.getUserMetadata = getUserMetadata;
exports.updateUserMetadata = updateUserMetadata;
exports.deleteUserMetadata = deleteUserMetadata;
exports.createService = createService;
exports.getService = getService;
exports.getServices = getServices;
exports.updateService = updateService;
exports.deleteService = deleteService;
exports.createTestimonial = createTestimonial;
exports.getTestimonial = getTestimonial;
exports.getTestimonials = getTestimonials;
exports.updateTestimonial = updateTestimonial;
exports.deleteTestimonial = deleteTestimonial;
exports.turnRecordFromDB = turnRecordFromDB;
exports.turnPostFromDB = turnPostFromDB;
exports.createNumber = createNumber;
exports.getNumber = getNumber;
exports.updateNumber = updateNumber;
exports.deleteNumber = deleteNumber;
exports.createPost = createPost;
exports.getPost = getPost;
exports.getPostById = getPostById;
exports.getPosts = getPosts;
exports.getPostsByNumber = getPostsByNumber;
exports.updatePost = updatePost;
exports.updatePosts = updatePosts;
exports.deletePost = deletePost;
exports.clearPosts = clearPosts;
exports.createMeal = createMeal;
exports.getMealById = getMealById;
exports.updateMeal = updateMeal;
exports.deleteMeal = deleteMeal;
exports.createIngredient = createIngredient;
exports.getIngredient = getIngredient;
exports.getIngredientById = getIngredientById;
exports.getIngredients = getIngredients;
exports.getIngredientsByMealId = getIngredientsByMealId;
exports.updateIngredient = updateIngredient;
exports.updateIngredients = updateIngredients;
exports.deleteIngredient = deleteIngredient;
exports.clearIngredients = clearIngredients;
exports.parseMeal = parseMeal;
exports.seconds = seconds;
exports.minutes = minutes;
exports.hours = hours;
exports.days = days;
exports.anyfy = anyfy;
exports.chance = chance;
exports.getFileNameFromURL = getFileNameFromURL;
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./database"));
// UserMetadata converters
function turnUserMetadataFromDB(data) {
    return (data && Object.assign(Object.assign({}, data), { data: typeof data.data === 'object' && data.data !== null
            ? data.data
            : {} }));
}
// Service converters
function turnServiceFromDB(data) {
    return (data && Object.assign(Object.assign({}, data), { metadata: typeof data.metadata === 'object' && data.metadata !== null
            ? data.metadata
            : {} }));
}
// UserMetadata CRUD
function createUserMetadata(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.userMetadata.create({
            data: user,
        });
    });
}
function getUserMetadata(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.userMetadata.findUnique({ where: { uid } });
        return turnUserMetadataFromDB(data);
    });
}
function updateUserMetadata(uid, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const updated = yield database_1.default.userMetadata.update({
            where: { uid },
            data,
        });
        return turnUserMetadataFromDB(updated);
    });
}
function deleteUserMetadata(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.userMetadata.delete({ where: { uid } });
    });
}
// Service CRUD
function createService(service) {
    return __awaiter(this, void 0, void 0, function* () {
        const created = yield database_1.default.service.create({
            data: service,
        });
        return turnServiceFromDB(created);
    });
}
function getService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.service.findUnique({ where: { id } });
        return turnServiceFromDB(data);
    });
}
function getServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.service.findMany();
        return data.map(turnServiceFromDB).filter(Boolean);
    });
}
function updateService(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const updated = yield database_1.default.service.update({
            where: { id },
            data,
        });
        return turnServiceFromDB(updated);
    });
}
function deleteService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.service.delete({ where: { id } });
    });
}
// Testimonial CRUD
function createTestimonial(testimonial) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.testimonial.create({
            data: testimonial,
        });
    });
}
function getTestimonial(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.testimonial.findUnique({ where: { id } });
    });
}
function getTestimonials() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.testimonial.findMany();
    });
}
function updateTestimonial(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.testimonial.update({
            where: { id },
            data,
        });
    });
}
function deleteTestimonial(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.testimonial.delete({ where: { id } });
    });
}
function turnRecordFromDB(data) {
    var _a;
    return (data && Object.assign(Object.assign({}, data), { saved_as: data.saved_as || undefined, reason: data.reason || undefined, discussionFrequency: (_a = data.discussionFrequency) !== null && _a !== void 0 ? _a : undefined }));
}
function turnPostFromDB(data) {
    return (data && Object.assign(Object.assign({}, data), { content: (typeof data.content === 'object' && data.content) || {} }));
}
function createNumber(numberRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberRecord.create({
            data: numberRecord,
            include: { posts: true },
        });
    });
}
function getNumber(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberRecord.findUnique({
            where: { id },
            include: { posts: true },
        });
    });
}
function updateNumber(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberRecord.update({
            where: { id },
            data,
            include: { posts: true },
        });
    });
}
function deleteNumber(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.numberPost.deleteMany({ where: { number_id: id } });
        yield database_1.default.numberRecord.delete({ where: { id } });
    });
}
function createPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.create({
            data: post,
            include: { number: true },
        });
    });
}
function getPost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getPostById(id);
    });
}
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.findUnique({
            where: { id },
            include: { number: true },
        });
    });
}
function getPosts(number_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getPostsByNumber(number_id);
    });
}
function getPostsByNumber(number_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.findMany({
            where: { number_id },
            include: { number: true },
        });
    });
}
function updatePost(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.update({
            where: { id },
            data,
            include: { number: true },
        });
    });
}
function updatePosts(number_id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.updateMany({ where: { number_id }, data });
    });
}
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.numberPost.delete({
            where: { id },
            include: { number: true },
        });
    });
}
function clearPosts(number_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (number_id === undefined)
            return yield database_1.default.numberPost.deleteMany();
        else
            return yield database_1.default.numberPost.deleteMany({
                where: { number_id },
            });
    });
}
function createMeal(meal) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.meal.create({
            data: Object.assign(Object.assign({}, meal), { dateModified: meal.dateModified
                    ? new Date(meal.dateModified)
                    : null, ingredients: { create: meal.ingredients } }),
            include: { ingredients: true },
        });
    });
}
function getMealById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.meal.findUnique({
            where: { id },
            include: { ingredients: true },
        });
    });
}
function updateMeal(id, meal) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ingredients } = meal, mealData = __rest(meal, ["ingredients"]);
        return yield database_1.default.meal.update({
            where: { id },
            data: Object.assign(Object.assign({}, mealData), { ingredients: ingredients
                    ? {
                        deleteMany: {},
                        create: ingredients,
                    }
                    : undefined }),
            include: { ingredients: true },
        });
    });
}
function deleteMeal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield clearIngredients(id);
        return yield database_1.default.meal.delete({
            where: { id },
            include: { ingredients: true },
        });
    });
}
function createIngredient(ingredient, mealId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.create({
            data: Object.assign(Object.assign({}, ingredient), { mealId }),
            include: { meal: true },
        });
    });
}
function getIngredient(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getIngredientById(id);
    });
}
function getIngredientById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.findUnique({
            where: { id },
            include: { meal: true },
        });
    });
}
function getIngredients(mealId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getIngredientsByMealId(mealId);
    });
}
function getIngredientsByMealId(mealId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.findMany({ where: { mealId } });
    });
}
function updateIngredient(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.update({
            where: { id },
            data,
            include: { meal: true },
        });
    });
}
function updateIngredients(mealId, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.updateMany({ where: { mealId }, data });
    });
}
function deleteIngredient(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.default.ingredient.delete({
            where: { id },
            include: { meal: true },
        });
    });
}
function clearIngredients(mealId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mealId === undefined)
            return yield database_1.default.ingredient.deleteMany();
        else
            return yield database_1.default.ingredient.deleteMany({
                where: { mealId },
            });
    });
}
function parseMeal(rawMeal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = rawMeal[`strIngredient${i}`];
        const measure = rawMeal[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push({ ingredient, measure });
        }
    }
    const meal = {
        id: rawMeal.idMeal,
        name: rawMeal.strMeal,
        category: rawMeal.strCategory,
        area: rawMeal.strArea,
        instructions: rawMeal.strInstructions,
        thumbnail: rawMeal.strMealThumb,
        tags: rawMeal.strTags ? rawMeal.strTags.split(',') : [],
        youtube: rawMeal.strYoutube,
        ingredients,
        source: rawMeal.strSource,
        imageSource: rawMeal.strImageSource,
        creativeCommonsConfirmed: rawMeal.strCreativeCommonsConfirmed,
        dateModified: typeof rawMeal.dateModified === 'string'
            ? new Date(rawMeal.dateModified)
            : null,
    };
    return meal;
}
function seconds(n = 1) {
    return n * 1000;
}
function minutes(n = 1) {
    return n * seconds(60);
}
function hours(n = 1) {
    return n * minutes(60);
}
function days(n = 1) {
    return n * hours(24);
}
const wait = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));
exports.wait = wait;
function anyfy(value) {
    return JSON.parse(JSON.stringify(value));
}
function chance(value) {
    if (value > 1 || value < 0)
        throw new Error('The value is out of range!');
    if (value > Math.random())
        return true;
    else
        return false;
}
function getFileNameFromURL(url, flag = false) {
    try {
        return path_1.default.basename(new URL(url).pathname);
    }
    catch (error) {
        if (flag)
            throw error;
        else
            return null;
    }
}
