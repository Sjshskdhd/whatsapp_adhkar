import fs from 'fs-extra';
import CrateDatabase from '../module/CrateDatabase.js';

export default async function Hi(from, pushname, body, e) {

    if (body === 'بوت' || body === 'Hi' || body === 'خدمة' || body === 'خدمه' || body === '#') {

        await CrateDatabase({ from: from, menu: 'main' });
        let message = `السلام عليكم ورحمه الله وبركاته \n`
        message += `مرحباً بك ${pushname} 👋 \n\n`
        message += 'من فضلك قم بكتابة *رقم* الخدمة ✉ \n\n'
        message += '*مثال: 1* \n\n'
        message += '1- قائمة القرآن الكريم 📖 \n'
        message += '2- قائمة الأذكار 📿 \n'
        message += '3- الباحث الحديثي 🪧 \n'
        message += '4- بطاقات القرآن 🎴 \n'
        message += '5- صحيح البخاري (صور مصممة) 🪪 \n'
        message += '6- حصن المسلم 🏰 \n'
        message += '7- التقويم الهجري 📆 \n'
        message += '8- فيديوهات قرآن عشوائية 🎥'
        await e.reply(message).catch(e => console.log(e));
    }
    
}
