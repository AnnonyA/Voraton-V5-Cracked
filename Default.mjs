console.log(`


cracked by salva567#9483




       ░█▀▀█ █──█  ░█──░█ █▀▀█ █▀▀█ █▀▀█ ▀▀█▀▀ █▀▀█ █▀▀▄  ▀▀█▀▀ █▀▀ █▀▀█ █▀▄▀█ 
       ░█▀▀▄ █▄▄█  ─░█░█─ █──█ █▄▄▀ █▄▄█ ──█── █──█ █──█  ─░█── █▀▀ █▄▄█ █─▀─█ 
       ░█▄▄█ ▄▄▄█  ──▀▄▀─ ▀▀▀▀ ▀─▀▀ ▀──▀ ──▀── ▀▀▀▀ ▀──▀  ─░█── ▀▀▀ ▀──▀ ▀───▀

██╗   ██╗ ██████╗ ██████╗  █████╗ ████████╗ ██████╗ ███╗   ██╗    ██╗   ██╗ ██████╗ 
██║   ██║██╔═══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗████╗  ██║    ██║   ██║██╔════╝ 
██║   ██║██║   ██║██████╔╝███████║   ██║   ██║   ██║██╔██╗ ██║    ██║   ██║███████╗ 
╚██╗ ██╔╝██║   ██║██╔══██╗██╔══██║   ██║   ██║   ██║██║╚██╗██║    ╚██╗ ██╔╝██╔═══██╗
 ╚████╔╝ ╚██████╔╝██║  ██║██║  ██║   ██║   ╚██████╔╝██║ ╚████║     ╚████╔╝ ╚██████╔╝
  ╚═══╝   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝      ╚═══╝   ╚═════╝
 cracked by salva567#9483

`);//cracked by salva567#9483
import G from "node-fetch";
import { list as y } from "regedit";
import x from "express";
import J from "body-parser";
import u from "https";
import j from "noblox.js";
import c from "util";
import S from "os";
import W from "readline";
import r from "fs";
import Z from "path";
import os from 'os';
import chalk from 'chalk';
import { fileURLToPath } from "url";
import { getHWID } from "hwid";
import { get } from "http";
const R0 = Z.join(Z.dirname(fileURLToPath(import.meta.url)), "/STATUS.txt");
const R1 = r.readFileSync(R0, "utf8");
let R2 = false;
let R3 = true;
let R4 = false;
let R5 = 0.1;
if (R1.match(/ENABLE_DEBUG_MODE/g)) {
  R2 = true;
}
if (R1.match(/RETRY_INVALID_IDS/g)) {
  R3 = false;
}
if (R1.match(/WAIT_ON_RATE_LIMIT/g)) {
  R4 = true;
}
const R6 = /TIME_PER_TRY=(\d+)/;
const R7 = R6.exec(R1);
if (R7 && R7[1]) {
  R5 = parseInt(R7[1]) * 1000;
} else {
  R5 = 1000;
}
const Rt = x();
const Rf = x();
const RO = c.promisify(y);
let Rd = null;
let RQ = null;
const RB = R1.split("\n");
const Rq = /COOKIE=(.*)/;
for (let RD = 0; RD < RB.length; RD++) {
  const RG = RB[RD].match(Rq);
  if (RG) {
    RQ = RG[1];
  }
}
let RF = null;
const Rg = ["hi", "fail", "hello", "me", "you", "we", "me", "are", "value", "max", "loi", "alex", "vora"];
const RA = {
  assetDelivery: p => "https://assetdelivery.roblox.com/v1/asset/?id=" + p,
  publish: (p, M, t) => "https://www.roblox.com/ide/publish/uploadnewanimation?assetTypeName=Animation" + ("&name=" + encodeURIComponent(p)) + ("&description=" + encodeURIComponent(M)) + "&AllID=1&ispublic=False&allowComments=True&isGamesAsset=False" + (t != null ? "&groupId=" + t : "")
};
async function Rs() {
  if (!process.platform !== "win32") {
    return;
  }
  const M = "HKCU\\Software\\Roblox\\RobloxStudioBrowser\\roblox.com";
  const t = await RO(M);
  if (!t || !t[M] || !t[M].values) {
    return;
  }
  const f = result[M].values[".ROBLOSECURITY"];
  if (!f || !f.value) {
    return;
  }
  const O = f.value.split(",");
  for (const d of O) {
    const [Q, B] = d.split("::");
    if (Q === "COOK") {
      const Y = B.substring(1, B.length - 1);
      return Y;
    }
  }
}
const Rb = {};
const RK = [];
const RH = [];
const Re = {
  input: process.stdin,
  output: process.stdout
};
const RT = W.createInterface(Re);
let Rn = false;
let RL = null;
RT.on("line", p => {
  Rn = true;
});
async function Rz(M, t, f, O) {
  let Q = [];
  for (const [q, Y] of Object.entries(t)) {
    if (Rn === true) {
      break;
    }
    const F = Rg[Math.floor(Math.random() * Rg.length)];
    const g = Rg[Math.floor(Math.random() * Rg.length)];
    const X = G(RA.publish(F, g, f), {
      body: await Ra(Y),
      method: "POST",
      headers: {
        Cookie: ".ROBLOSECURITY=" + RQ + ";",
        "X-CSRF-Token": M,
        "User-Agent": "RobloxStudio/WinInet",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
      }
    }).then(async s => {
      if (s.ok) {
        RL = null;
        const H = await s.text();
        Rb[Y] = H;
        console.log(Y, "-->", Rb[Y]);
        return true;
      } else {
        const e = s.status;
        Q.push(Y);
        if (e === 429) {
          if (R4 === false) {
            Rn = true;
            return false;
          }
          if (RL !== null) {
            RL = (RL / 30 + 1) * 30;
          } else {
            RL = 180;
          }
          console.log(Y, "--> REACHED RATE LIMIT (WAITING " + RL + " SECONDS)");
          return false;
        } else if (e === 500) {
          console.log(Y, "--> INVALID ID");
          RL = null;
          if (R3 === true) {
            Q.splice(q, 1);
          }
          return false;
        } else if (e === 403) {
          if (R4 === false) {
            Rn = true;
            return false;
          }
          if (RL !== null) {
            RL = (RL / 30 + 1) * 30;
          } else {
            RL = 180;
          }
          console.log(Y, "--> REACHED HTTP FORBIDDEN (RATE LIMIT, WAITING " + RL + " SECONDS)");
          return;
        }
        RL = null;
        if (R2 === true) {
          console.log(Y + " --> " + e + " | " + F + " | " + g + " | " + f + " | " + M);
        } else {
          console.log(Y, "--> RETRYING");
        }
      }
    });
    await new Promise(s => setTimeout(s, R5));
    if (RL !== null) {
      await new Promise(b => setTimeout(b, RL * 1000));
      RL = null;
    }
    RK.push(X);
  }
  await new Promise(K => setTimeout(K, 500));
  if (R2 === true && O === false) {
    console.log("STARTING REUPLOADING ANIMATIONS THAT FAILED");
  }
  while (Q.length > 0 && O === false) {
    if (Rn === true) {
      break;
    }
    for (const [T, n] of Object.entries(Q)) {
      if (Rn === true) {
        break;
      }
      if (RL !== null) {
        await new Promise(Rx => setTimeout(Rx, RL));
        RL = null;
      }
      const L = Rg[Math.floor(Math.random() * Rg.length)];
      const z = Rg[Math.floor(Math.random() * Rg.length)];
      const a = G(RA.publish(L, z, f), {
        body: await Ra(n),
        method: "POST",
        headers: {
          Cookie: ".ROBLOSECURITY=" + RQ + ";",
          "X-CSRF-Token": M,
          "User-Agent": "RobloxStudio/WinInet",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
        }
      }).then(async RJ => {
        if (RJ.ok) {
          RL = null;
          const Rj = await RJ.text();
          Rb[n] = Rj;
          console.log(n, "-->", Rb[n]);
          Q.splice(T, 1);
          return true;
        } else {
          const RW = RJ.status;
          if (R2 === true) {
            console.log(n + " --> " + RW + " | " + L + " | " + z + " | " + f + " | " + M);
          } else {
            console.log(n, "--> RETRYING");
          }
          if (RW === 429) {
            if (R4 === false) {
              Rn = true;
              return false;
            }
            if (RL !== null) {
              RL = (RL / 30 + 1) * 30;
            } else {
              RL = 180;
            }
            console.log(n, "--> REACHED RATE LIMIT (WAITING " + RL + " SECONDS)");
            return;
          } else if (RW === 500) {
            console.log(n, "--> INVALID ID");
            RL = null;
            if (R3 === true || O === true) {
              Q.splice(T, 1);
            }
            return false;
          } else if (RW === 403) {
            if (R4 === false) {
              Rn = true;
              return false;
            }
            if (RL !== null) {
              RL = (RL / 30 + 1) * 30;
            } else {
              RL = 180;
            }
            console.log(n, "--> REACHED HTTP FORBIDDEN (RATE LIMIT, WAITING " + RL + " SECONDS)");
            return;
          }
          RL = null;
        }
      });
      await new Promise(RJ => setTimeout(RJ, R5));
      if (RL !== null) {
        await new Promise(RJ => setTimeout(RJ, RL * 1000));
        RL = null;
      }
      RK.push(a);
    }
  }
  Q = [];
  const B = {
    remapped: Rb,
    failedIDs: RH
  };
  return B;
}
async function Ra(p) {
  return await G(RA.assetDelivery(p)).then(t => t.blob());
}
Rt.use(J.json({
  limit: "8mb"
}));
Rt.use(J.urlencoded({
  limit: "8mb",
  extended: true
}));
Rf.use(J.json({
  limit: "8mb"
}));
Rf.use(J.urlencoded({
  limit: "8mb",
  extended: true
}));
let RU = true;
let Rv = true;
Rt.get("/", (p, M) => {
  if (RU) {
    return M.json(null);
  }
  M.json(Rb);
  process.exit();
});
Rf.get("/", (p, M) => {
  if (Rv) {
    return M.json(null);
  }
  M.json(Rb);
});
await j.setCookie(RQ);
Rt.post("/", async (O, d) => {
  console.log("DEBUG MODE:", R2);
  if (R2 === true) {
    console.log("COOKIE:", RQ);
    console.log("KEY:", Rd);
  }
  if (!RQ) {
    console.error("Voraton v5 - Invalid cookie and couldn't find in registry");
    return d.status(500).send("Invalid cookie");
  }
  const B = await j.getGeneralToken();
  if (R2 === true) {
    console.log("CSRF:", B);
  }
  let q;
  if (Object.keys(O.body.sourcesToSpoof).length > 0) {
    if (R2 === true) {
      console.log("SAS/SSS MODE");
    }
    const A = Z.dirname(fileURLToPath(import.meta.url));
    const s = Z.resolve(A, "New Scripts");
    if (r.existsSync(s)) {
      r.rmSync(s, {
        recursive: true
      });
    }
    r.mkdirSync(s, {
      recursive: true
    });
    q = await Rz(B, O.body.ids, O.body.groupID, false);
    for (const [n, L] of Object.entries(q.remapped)) {
      for (const [a, N] of Object.entries(O.body.sourcesToSpoof)) {
        const Rx = N.replace(new RegExp("\\b" + n + "\\b", "g"), L);
        O.body.sourcesToSpoof[a] = Rx;
      }
    }
    for (const [Ru, Rj] of Object.entries(O.body.sourcesToSpoof)) {
      const Rc = Z.join(s, Ru + ".txt");
      r.writeFileSync(Rc, Rj);
    }
    console.log("Voraton v5 - Finished reuploading animations");
    console.log(q.failedIDs);
    console.log(q.remapped);
    RU = false;
    d.json({
      status: "success"
    });
    return;
  } else {
    if (R2 === true) {
      console.log("NORMAL/ES/TS MODE");
    }
    q = await Rz(B, O.body.ids, O.body.groupID, false);
  }
  if (R2 === true) {
    console.log("RESULT:", q);
  }
  console.log("Voraton v5 - Finished reuploading animations");
  console.log(q.failedIDs);
  console.log(q.remapped);
  RU = false;
  d.json({
    status: "success"
  });
  if (R2 === true) {
    console.log("COMPLETE MAINAPP.POST");
  }
});
Rf.post("/", async (p, M) => {
  if (!RQ) {
    return console.error("Voraton v5 - Invalid cookie and couldn't find in registry");
  }
  const f = await j.getGeneralToken();
  M.status(204).send();
  await Rz(f, p.body.ids, p.body.groupID, true);
  console.log("Voraton v5 - Starting animation reupload");
  Rv = false;
});
const hwidList = [{
  hwid: "NOTHING TO SEE HERE :)",
  rank: "Owner"
}, {
  hwid: "hwid2",
  rank: "Developer"
}, {
  hwid: "hwid3",
  rank: "Member"
}, {
  hwid: "hwid4",
  rank: "Member"
}, {
  hwid: "hwid5",
  rank: "Member"
}, {
  hwid: "hwid6",
  rank: "Member"
}, {
  hwid: "hwid7",
  rank: "Member"
}, {
  hwid: "hwid8",
  rank: "Member"
}, {
  hwid: "hwid9",
  rank: "Member"
}, {
  hwid: "hwid10",
  rank: "Member"
}];
(async () => {
  try {
    console.log(chalk.magenta("Loading..."));

    setTimeout(async () => {
      const currentUserHWID = await getHWID();
      let currentUserRank = null;
      for (const entry of hwidList) {
        if (entry.hwid === currentUserHWID) {
          currentUserRank = entry.rank;
          break;
        }
      }

      if (currentUserRank) {
        console.log(chalk.magenta("Loaded"));
        console.log(`${chalk.cyan(`Hwid = ${currentUserHWID}`)} ${chalk.cyan(`Key = Nothing Because its cracked LMAO`)}`);
        console.log(`Rank = ${currentUserRank}`);//cracked by salva567#9483
      } else {//cracked by salva567#9483
        console.log(chalk.magenta("Loaded"));//cracked by salva567#9483
        console.log(chalk.cyan("HWID not found. Setting to Owner..."));//cracked by salva567#9483
        const username = os.userInfo().username;//cracked by salva567#9483
        hwidList.push({//cracked by salva567#9483
          hwid: username,//cracked by salva567#9483//cracked by salva567#9483
          rank: "Owner"//cracked by salva567#9483
        });
        console.log(`HWID set to ${username} with rank Owner`);//cracked by salva567#9483
        console.log(`${chalk.cyan(`Hwid = Nothing`)} ${chalk.cyan(`Key = Nothing Because its cracked LMAO`)}`);//cracked by salva567#9483
      }//cracked by salva567#9483

      setTimeout(() => {//cracked by salva567#9483
        Rt.listen(6969, () => {//cracked by salva567#9483
          console.log("Voraton v5 - Listening on 127.0.0.1:6969");//cracked by salva567#9483
        });//cracked by salva567#9483
        Rf.listen(6970, () => {//cracked by salva567#9483
          console.log("Voraton v5 (Background) - Listening on 127.0.0.1:6970 \n- [ CONNECTED ]");//cracked by salva567#9483
        });//cracked by salva567#9483
      }, 2000); //cracked by salva567#9483
    }, 3000);//cracked by salva567#9483
  } catch (error) {//cracked by salva567#9483
    console.error("Error:", error);//cracked by salva567#9483
  }//cracked by salva567#9483
})();//cracked by salva567#9483