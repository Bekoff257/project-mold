import React from 'react'
import classes from "./Req.module.scss"
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const exceptionalRoutes = ["/login", "/admin", "/admin/orders", "/admin/create", "/admin/manage", "/admin/chart", "/admin/orders/all", "/admin/orders/not-contacted", "/admin/orders/contacted"]


function Req() {
    const reqLocation = useLocation()
    const { t } = useTranslation()

    return !exceptionalRoutes.includes(reqLocation.pathname) ? (
    <>
        <div className="container">
        <div className={classes.reqs}>
            <h1>{t("footertop.recomend")}</h1>
            <div className={classes.advice}>
                <ul className={classes.advice_services}>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>{t('req.res')}</p>
                            <span className={classes.advice_small}>{t('req.res_desc')}</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>{t('req.delivery')}</p>
                            <span className={classes.advice_small}>{t('req.best_quality')}</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>{t('req.bonus')}</p>
                            <span className={classes.advice_small}>{t('req.made_1')} <br /> {t('req.made_2')}</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>{t('req.help')}</p>
                            <span className={classes.advice_small}>{t('req.tss')}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  ) : <></>
}

export default Req