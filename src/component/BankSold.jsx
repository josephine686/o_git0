const BankSold = () => {

    return (

        ([{title:"Argent Bank Checking (x8349)",value:"2,082.79",description:"Available Balance"},
          {title:"Argent Bank Savings (x6712)",value:"10,928.42",description:"Available Balance"},
          {title:"Argent Bank Credit Card (x8349)",value:"184.30",description:"Current Balance"}]).map((account) => {

            return (
                <section key={account.id} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title" >{account?.title}</h3>
                        <p className="account-amount">${account?.value}</p>
                        <p className="account-amount-description">{account?.description}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            )

        })
    )
}

export default BankSold;