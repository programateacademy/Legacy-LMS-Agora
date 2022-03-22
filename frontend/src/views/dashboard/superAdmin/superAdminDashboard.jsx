import React from "react";
import styles from "./styles.module.css"
import {Table} from '../../../components/table'
import { useState } from "react";
import { useEffect } from "react";
import apiAgora from '../../../api'

export function SuperAdminDashboard() {
  const [admins, setAdmins] = useState([])

  const fetchAdmins = async () => {
    const res = await apiAgora.get('/api/all_admin')
    console.log(res)
    setAdmins (res.data)
  }
  useEffect( () => {
    fetchAdmins()
  }, [])
  return (
    <div className={styles.example}>
      <div class="container">
        <h1>Administradores</h1>
        <Table tableList={admins}/>
</div>
    </div>
  );
}