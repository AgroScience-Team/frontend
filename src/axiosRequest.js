import axios from 'axios'

export function postreg({ email, password, role }) {
    return new Promise((resolve, reject) => {
        const myrequest = {
            "email": email,
            "text_password": password,
            "role": role
        }
        axios
            .post('http://localhost:8080/api/auth/register', myrequest)
            .then((response) => {
                console.log(response);
                const code = response.status;
                if (code === 201) {
                    resolve(response.data);
                } else if (code === 422) {
                    let errorMsg = "";
                    response.data.detail.forEach((det) => {
                        let tmp = "";
                        tmp += det.loc[0] + " - ";
                        tmp += det.loc[1] + ". ";
                        tmp += det.type + ". ";
                        tmp += det.msg + " \n";
                        errorMsg += tmp;
                    })

                    reject(errorMsg);
                } else {
                    reject('unknownCodeError');
                }

            }
            )
            .catch((error) => {
                reject(error);
            })
    }

    )
}


export function postToServer(object, responseType = "json") {
    console.log("POST TO SERVER: ", object); // что передаем

    return new Promise((resolve, reject) => { //ассинхронное 
        const { token, tokenId, url } = taskStore.getState().userInfo;
        //     const tokenId = window.localStorage.getItem("pwa-tokenId");

        if (!token && !tokenId) { //хранить в локальном хранилище
            console.log("No tokens found");
            logout();
            // reject({
            //   error: {
            //     message: "No tokens found",
            //   },
            // });
            return;
        }
        const config = {
            headers: {
                Authorization: { "token": ["${token}", "${tokenId}"] },
            },
            responseType,
        };
        // console.log('SEND: ', object);
        axios
            .post(url, object, config)
            .then((response) => {
                const result = checkResponse(response);
                console.log("OBJECT: ", object);
                console.log("RESPONSE: ", response);
                console.log("RESULT: ", result);
                if (result.code === 0) resolve(result.payload);
                else {
                    if (result.message) reject(result.message);
                    reject(result);
                }
            })
            .catch((error) => {
                console.log("ERR", error);
                storeArray.setError(error);
                reject(error);
            });
    });
}