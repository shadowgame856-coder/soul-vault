console.log("/* 恭喜你發現了 4.04% 的真相。請保持發呆。 */");// 摩斯密碼字典

const MORSE_CODE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};
const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE_CODE).map(([k, v]) => [v, k]));

// 1. 遺言解碼工具邏輯
function showDecoder() {
    document.getElementById('decoder-zone').style.display = 'block';
}

function closeDecoder() {
    const zone = document.getElementById('decoder-zone');
    const input = document.getElementById('decoder-input');
    const output = document.getElementById('decoder-output');
    
    // 清除所有數據殘留
    input.value = "";
    output.textContent = "";
    zone.style.display = 'none';
}

function processMorse(encode) {
    const input = document.getElementById('decoder-input');
    const output = document.getElementById('decoder-output');
    // 中文偵測正則表達式 (含標點符號)
    const chineseRegex = /[\u4E00-\u9FFF]/;

    if (chineseRegex.test(input.value)) {
        output.style.color = "#ff0000"; // 錯誤警告色
        output.textContent = "> 錯誤：偵測到非標準字符。系統目前不支援中文遺言解析。";
        input.value = ""; // 強制清空非法輸入
        return;
    }

    output.style.color = "white"; // 恢復正常色
    let result = "";
    try {
        if (encode) {
            result = input.value.toUpperCase().split('').map(c => MORSE_CODE[c] || c).join(' ');
        } else {
            result = input.value.toUpperCase().split(' ').map(code => REVERSE_MORSE[code] || code).join('');
        }
        document.getElementById('decoder-output').textContent = "> 輸出結果: " + result;
    } catch (error) {
        document.getElementById('decoder-output').textContent = "> 錯誤：內容損毀，無法解析。";
    }
}

// 2. 社交障礙自動導航
function navToYouTube() {
    // 這裡導航到你的 YouTube 頻道或是指定的文青風格影片
    window.open("https://www.youtube.com/@u00_Vtuber", "_blank");
}

// 3. 地府掛號系統 (權限不足)
function accessDenied() {
    // alert("❌ 拒絕存取：您的權限不足。\n\n當前身分：$null\n需要權限：院長級別 (Level 999)");
    Swal.fire({
        theme: 'dark',
        title: "拒絕存取：您的權限不足！",
        html: "<div style='text-align: left; margin: 0 70px;'>當前身分：$null<br>需要權限：院長級別 (Level 999)</div>",
        icon: "error",
        iconColor: "#ff0000",
        // confirmButtonColor: "#39bf14",
        buttonsStyling: false,
        draggable: true
    });
}

// 4. 除靈系統
// 打開對話框
function openExorcism() {
    // document.getElementById('exorcism-modal').style.display = 'flex';
    const swalWithBootstrapButtons = Swal.mixin({
        theme: 'dark',
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "因果邏輯修補程序 v0.99",
        html: `
            <div style="text-align: left;">偵測到時空因果衝突... <br>請輸入欲修正的事件描述：</div>
            <input type="text" id="causal-input" class="swal2-input" placeholder="例如：用靈球洗碗"><br>
            <label style="color: red; font-size: 15px;">⚠️ 警告：修復因果可能導致系統崩潰。確認修復請按「否」。</label>
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "是 (Yes)",
        cancelButtonText: "否 (No)",
        reverseButtons: false
    }).then((result) => {
        const reasonInput = document.getElementById('causal-input').value;
        if (!reasonInput) {
            Swal.mixin({
                theme: 'dark',
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false
            }).fire({
                icon: 'error',
                iconColor: "#ff0000",
                title: '請輸入因果描述，否則無法定位靈魂溢位點。'
            });
            return;
        }

        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "系統提示",
                html: "您選擇了「是」，因果衝突已擱置。<br>時空保持不穩定狀態。",
                icon: "info",
                iconColor: "#0000ff"
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            
            // 開始除靈邏輯
            swalWithBootstrapButtons.fire({
                title: "正在修補因果...",
                text: `事件: ${reasonInput}`,
                icon: "info",
                iconColor: "#0000ff",
                showConfirmButton: false,
                timer: 1500
            });
            
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    window.location.href = "404.html";
                } else {
                    swalWithBootstrapButtons.fire({
                        title: "因果修補成功！",
                        text: "邏輯已重構，該事件已從您的數位記憶體中抹除。",
                        icon: "success",
                        iconColor: "#39bf14"
                    });
                }
            }, 1500);
        }
    });
}

// 關閉對話框 (按「是」的時候)
function closeExorcism() {
    alert("系統提示：您選擇了「是」，因果衝突已擱置。系統保持不穩定狀態。");
    document.getElementById('exorcism-modal').style.display = 'none';
}

// 開始除靈 (按「否」的時候)
function startExorcism() {
    const reason = document.getElementById('causal-input').value;
    if (!reason) {
        alert("請輸入因果描述，否則無法定位靈魂溢位點。");
        return;
    }

    alert(`正在修補因果：${reason}...`);
    
    // 50% 機率跳轉 404，50% 機率成功
    setTimeout(() => {
        if (Math.random() > 0.5) {
            // 跳轉到 404 頁面
            window.location.href = "404.html";
        } else {
            // 修復成功
            alert("✅ 因果修補成功！\n\n邏輯已重構，該事件已從您的數位記憶體中抹除。");
            document.getElementById('exorcism-modal').style.display = 'none';
            document.getElementById('causal-input').value = ""; // 清空輸入
        }
    }, 1500);
}

// 保持原本的打字機特效...
const output = document.getElementById('terminal-output');
const lines = [
    "> 初始化系統時間歸零協議...",
    "> 載入學歷：孟婆湯大學 (主修記憶體回收)... OK",
    "> 載入經歷：地府掛號系統優化專案... OK",
    "> 偵測環境：A 市立幽靈綜合病院...",
    "> 警告：發現靈魂病歷數據溢位！",
    "> 正在嘗試與該靈魂進行因果共振...",
    "> 正在啟動發呆模式以維持系統穩定...",
];

let lineIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        let p = document.createElement('p');
        p.textContent = lines[lineIndex];
        output.appendChild(p);
        lineIndex++;
        setTimeout(typeLine, 800);
    }
}

function updateTime() {
    const timeElements = document.querySelectorAll('.system-time');
    const now = new Date();
    // 模擬「系統時間歸零」邏輯
    if (now.getSeconds() === 0) {
        timeElements.forEach(el => el.textContent = "UNTIL RESET");
    } else {
        timeElements.forEach(el => el.textContent = "Until system_time == 0");
    }
}

typeLine();
setInterval(updateTime, 1000);