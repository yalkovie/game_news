import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./database.db')

function getData( responseCallback, contentName ) {
    if (contentName !== 'game' && contentName !== 'news') {
        return responseCallback({error: `table ${contentName} is not exists`})
    }

    db.all(`SELECT * FROM ${contentName}`, (error, data) => {
        if (error) {
            return console.error(`Ошибка выборки из ${contentName}:`, error.message)
        }

        data.forEach( dataObject => {
            if ("descriptions" in dataObject) {
                dataObject.descriptions = JSON.parse(dataObject.descriptions)
            }
            if ("images" in dataObject) {
                dataObject.images = JSON.parse(dataObject.images)
            } 
        })
        responseCallback(data)
    })
}

function close( closeCallback ) {
    db.close()
    closeCallback()
}

export {
    getData,
    close
}