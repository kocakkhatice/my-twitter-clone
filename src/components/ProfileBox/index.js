import React from 'react'
import cn from 'classnames'
import style from './styles.module.css'
import ProfilePhoto from '../ProfilePhoto'
import {ArrowBottom} from '../icons'
import Button from '../Button'
import TextBody from '../TextBody'
function ProfileBox({name='Hatice Koçak', slug= 'haticekocak'}) {
    return (
        <Button className={cn([style.box])}>
             <ProfilePhoto/>
             <div className = {style.info}>
                 <TextBody bold>{name}</TextBody>
                 <TextBody className = {style.slug}>@{slug}</TextBody>
             </div>
             <ArrowBottom className = {style.icon}/>
        </Button>
    )
}

export default ProfileBox
