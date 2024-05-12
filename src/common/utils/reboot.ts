import { exit } from "process";
import { resolve } from "path";
import { writeFile, writeFileSync } from "fs";
import { exec } from "node:child_process";
export async function rebootWithQuickLogin(uin: string) {
    let batScript = resolve(__dirname, './napcat.bat');
    let batUtf8Script = resolve(__dirname, './napcat-utf8.bat');
    let bashScript = resolve(__dirname, './napcat.sh');
    if (process.platform === 'win32') {
        exec(`timeout /t 5 /nobreak & ${batUtf8Script} -q ${uin}`);
    } else if (process.platform === 'linux') {
        exec(`timeout 5 & ${bashScript} -q ${uin}`);
        // 启动bash执行脚本
    }
    exit(0);
}
export async function rebootWithNormolLogin() {
    let batScript = resolve(__dirname, './napcat.bat');
    let batUtf8Script = resolve(__dirname, './napcat-utf8.bat');
    let bashScript = resolve(__dirname, './napcat.sh');
    if (process.platform === 'win32') {
        exec(`timeout /t 5 /nobreak & ${batUtf8Script}`);
    } else if (process.platform === 'linux') {
        exec(`timeout 5 & ${bashScript}`);
        // 启动bash执行脚本
    }
    exit(0);
}