import React from "react";
import { data } from './mock.jsx'
import { Tarzan, Container, Promo, PromoHead } from './styled.js'


class App extends React.Component {
  state = {
    list: data,
    selected: {}
  }
  render() {
    const Delete = (id) => {
      let res = this.state.list.filter(v => v.id != id)
      this.setState({ list: res })
    }
    const Edit = (selected) => {
      this.setState({ selected })
    }
    const Save = () => {
      let res = this.state.list.map(vl => vl.id == this.state.selected.id ? this.state.selected : vl)
      this.setState({ list: res, selected: null })
    }

    return (
      <Tarzan>
        <div>
          {
            this.state.list.map((v) => {
              let slc = this.state.selected?.id == v.id
              return <Container>
                <img src={v.img} />
                <Container.heroWrap>
                  <Container.TitleWrapFlex>
                    <Container.TitleWrap>
                      <Container.Title>{slc ? <input defaultValue={this.state.selected.title} onChange={(e) => { this.setState({ selected: { ...this.state.selected, title: e.target.value } }) }} /> : v.title}</Container.Title>
                      <Container.Text>{slc ? <input defaultValue={this.state.selected.text} onChange={(e) => { this.setState({ selected: { ...this.state.selected, text: e.target.value } }) }} /> : v.text}</Container.Text>
                    </Container.TitleWrap>
                    <Container.Btn>{v.btn}</Container.Btn>
                  </Container.TitleWrapFlex>
                  <Container.Price>{slc ? <input defaultValue={this.state.selected.price} onChange={(e) => { this.setState({ selected: { ...this.state.selected, price: e.target.value } }) }} /> : v.price}</Container.Price>
                  <Container.Sum>{slc ? <input defaultValue={this.state.selected.sum} onChange={(e) => { this.setState({ selected: { ...this.state.selected, sum: e.target.value } }) }} /> : v.sum}</Container.Sum>
                </Container.heroWrap>
              </Container>
            })
          }
        </div>
        <table>
          <PromoHead>
            <PromoHead.Info>Date Published</PromoHead.Info>
            <PromoHead.Info>Status</PromoHead.Info>
            <PromoHead.Info>View</PromoHead.Info>
            <PromoHead.Info>Action</PromoHead.Info>
          </PromoHead>
          {
            this.state.list.map(v => {
              let slc = this.state.selected?.id == v.id
              return <Promo>
                <Promo.Info>{v.data}</Promo.Info>
                <Promo.Info>{v.status}</Promo.Info>
                <Promo.Info>{v.view}</Promo.Info>
                <Promo.btnWrap>
                  {slc ? (
                    <>
                      <Promo.btn onClick={Save} >Save</Promo.btn>
                      <Promo.btn onClick={() => this.setState({ selected: null })} >Cansel</Promo.btn>
                    </>
                  ) : <>
                    <Promo.btn onClick={() => Edit(v)} >Edit</Promo.btn>
                    <Promo.btn onClick={() => Delete(v.id)}>Delete</Promo.btn>
                  </>
                  }
                </Promo.btnWrap>
              </Promo>
            })
          }
        </table>
      </Tarzan>
    );
  };
}

export default App;