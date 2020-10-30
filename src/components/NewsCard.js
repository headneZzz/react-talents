import {Card} from "antd";
import React from "react"

export default () => {
    return (
        <Card
            hoverable
            cover={<img alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
            <Card.Meta title="Новость с очень длинным заголовком" description="Соси"/>
        </Card>
    )
}