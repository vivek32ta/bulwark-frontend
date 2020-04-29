
import React, { Component } from 'react'

class Dash extends Component {

	state = {
		selectedOption: 'wallet'
	}

	renderClaims = () => {
		return (
			<div className="claims">
				<div className="heading">View Claims</div>
				<div className="info">
					<img src={require('../assets/images/info.svg')} alt="" />
					<span>All your claims as recorded on the blockchain.</span>
				</div>
				<div className="options">
					<div className="option">Claim history</div>
					<div className="option">Current claims</div>
					<div className="option">Approved claims</div>
					<div className="option">Rejected claims</div>
				</div>
			</div>
		)
	}

	renderAccountDetails = () => {
		const [user] = this.props.user
		return (
			<div className="account">
				<div className="heading">Account Details</div>
				<div className="info">
					<img src={require('../assets/images/info.svg')} alt="" />
					<span>Your details as recorded on the blockchain.</span>
				</div>
				<div className="options">
					<div className="option">
						<div className="heading">Keys</div>
						<div className="h">Private Key</div>
						<div className="v">{user.keys.private}</div>
						<div className="h">Public Key</div>
						<div className="v">{user.keys.public}</div>
					</div>
					<div className="option">
						<div className="heading">Digital Documents</div>
						<div className="h dd">Vehicle License</div>
						<div className="v dd">{user.documents.license}</div>
					</div>
				</div>
			</div>
		)
	}

	renderOverview = () => {
		const [user] = this.props.user
		return (
			<div className="overview">
				<div className="heading">Overview</div>
				<div className="info">
					<img src={require('../assets/images/info.svg')} alt="" />
					<span>An overview of your account.</span>
				</div>
			</div>
		)
	}

	renderBlockchain = () => {
		return (
			<div className="blockchain">
				<div className="heading">Blockchain</div>
				<div className="info">
					<img src={require('../assets/images/info.svg')} alt="" />
					<span>The blockchain itself.</span>
				</div>
			</div>
		)
	}

	renderWallet = () => {
		const [user] = this.props.user
		return (
			<div className="wallet">
				<div className="heading">Your Wallet</div>
				<div className="info">
					<img src={require('../assets/images/info.svg')} alt="" />
					<span>Credits in your wallet.</span>
				</div>
				<div className="options">
					<div className="option">
						<div className="heading">Total credits</div>
						<div className="val">{user.wallet.credits} ETH</div>
					</div>
					<div className="option">
						<div className="heading">Transaction history</div>
						{this.renderTransactionHistory(user.wallet.history)}
					</div>
				</div>
			</div>
		)
	}

	renderTransactionHistory = history => {
		return (
			<div className="transaction-history">
				<div className="headers">
					<span>Timestamp</span>
					<span>Sender</span>
					<span>Receiver</span>
					<span>Amount</span>
					<span>Balance</span>
				</div>
			</div>
		)
	}

	render() {

		const [user, updateUser] = this.props.user
		const {selectedOption} = this.state

		return (
			<div className='dash' >
				<div className="nav">
					<div className="greeting">
						Greetings, {user.name}
					</div>
					<div className="logout"
						onClick={() => updateUser(false)} >logout</div>
				</div>
				<div className="side-menu">
					<div className="options">
						<div className={`option${selectedOption === 'overview' ? ' selected' : ''}`}
							onClick={() => this.setState({selectedOption: 'overview'})} >
							<img src={require('../assets/images/dashboard.svg')} alt="" />
							<span>Overview</span>
						</div>
						<div className={`option${selectedOption === 'claims' ? ' selected' : ''}`}
							onClick={() => this.setState({selectedOption: 'claims'})} >
							<img src={require('../assets/images/claim.svg')} alt="" />
							<span>Claims</span>
						</div>
						<div className={`option${selectedOption === 'account' ? ' selected' : ''}`}
							onClick={() => this.setState({selectedOption: 'account'})} >
							<img src={require('../assets/images/account.svg')} alt="" />
							<span>Account</span>
						</div>
						<div className={`option${selectedOption === 'wallet' ? ' selected' : ''}`}
							onClick={() => this.setState({selectedOption: 'wallet'})} >
							<img src={require('../assets/images/wallet.svg')} alt="" />
							<span>Wallet</span>
						</div>
						<div className={`option${selectedOption === 'blockchain' ? ' selected' : ''}`}
							onClick={() => this.setState({selectedOption: 'blockchain'})} >
							<img src={require('../assets/images/blockchain.svg')} alt="" />
							<span>Blockchain</span>
						</div>
					</div>
				</div>
				{
					selectedOption === 'overview' ? this.renderOverview()
					: selectedOption === 'claims' ? this.renderClaims()
					: selectedOption === 'account' ? this.renderAccountDetails()
					: selectedOption === 'wallet' ? this.renderWallet()
					: selectedOption === 'blockchain' ? this.renderBlockchain()
					: null
				}
			</div>
		)
	}
}

export default Dash
