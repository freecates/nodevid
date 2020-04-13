import axios from 'axios';
import validator from 'email-validator';
import Link from 'next/link';
import React, { Component } from 'react';
import ThankYou from './ThankYou';

const formUrl =
  'https://script.google.com/macros/s/AKfycbwM_WDArsr5E9yihmHmT65cU3bSR-aDtgsZS-_a_irkmKNjUWkA/exec';

class SubscriptionForm extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid;
    return (
      <form
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        onAccepted={this.props.isAccepted}
        className='form'>
        <section className='form-block'>
          <h2>1.- Crea l'equip</h2>
          <div>
            <label htmlFor='team_name'>
              <input
                type='text'
                name='team_name'
                id='team_name'
                placeholder="Nom de l'equip"
              />
            </label>
          </div>
          <div>
            <h3>Cap de Colla</h3>
            <label htmlFor='lead_member_name'>
              <input
                type='text'
                name='lead_member_name'
                id='lead_member_name'
                placeholder='Nom del Cap de Colla'
              />
            </label>
            <label htmlFor='lead_member_email'>
              <input
                type='email'
                name='lead_member_email'
                id='lead_member_email'
                placeholder='correu-e del Cap de Colla'
                className={`${showEmailError ? 'error' : ''}`}
                ref={(node) => (this.emailNode = node)}
              />
            </label>
            <label htmlFor='lead_member_phone'>
              <input
                type='tel'
                name='lead_member_phone'
                id='lead_member_phone'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
                placeholder='telèfon del Cap de Colla'
              />
              <small>Format: 655-555-555</small>
            </label>
            <label htmlFor='lead_member_description'>
              <textarea
                name='lead_member_description'
                id='lead_member_description'
                placeholder='Amb 3 paraules com et defineixes'
                maxLength={240}
                minLength={120}
                cols={30}
                rows={10}
              />
            </label>
            <label htmlFor='lead_member_nickname'>
              <input
                type='text'
                name='lead_member_nickname'
                id='lead_member_nickname'
                placeholder='Àlies del Cap de Colla'
              />
            </label>
          </div>
          <div>
            <h3>Membre de l'equip</h3>
            <label htmlFor='second_member_name'>
              <input
                type='text'
                name='second_member_name'
                id='second_member_name'
                placeholder="Nom del Membre de l'equip"
              />
            </label>
            <label htmlFor='second_member_email'>
              <input
                type='email'
                name='second_member_email'
                id='second_member_email'
                placeholder="correu-e Membre de l'equip"
                className={`${showEmailError ? 'error' : ''}`}
                ref={(node) => (this.emailNode = node)}
              />
            </label>
            <label htmlFor='second_member_description'>
              <textarea
                name='second_member_description'
                id='second_member_description'
                placeholder='Amb 3 paraules com et defineixes'
                maxLength={240}
                minLength={120}
                cols={30}
                rows={10}
              />
            </label>
            <label htmlFor='second_member_nickname'>
              <input
                type='text'
                name='second_member_nickname'
                id='second_member_nickname'
                placeholder="Àlies del Membre de l'equip"
              />
            </label>
          </div>
          <div className='half-width'>
            <h3>Comunitat veïnal</h3>
            <label htmlFor='city'>
              <input type='text' name='city' id='city' placeholder='Ciutat' />
            </label>
            <label htmlFor='address'>
              <input
                type='text'
                name='address'
                id='address'
                placeholder='Adreça'
              />
              <small>Format: Carrer del Mig, 1</small>
            </label>
            <label htmlFor='postal_code'>
              <input
                type='number'
                name='postal_code'
                id='postal_code'
                placeholder='Codi postal'
                maxLength={5}
              />
              <small>Format: 08001</small>
            </label>
            <label htmlFor='total_blocks'>
              <input
                type='number'
                name='total_blocks'
                id='total_blocks'
                placeholder="Número d'habitatges"
                maxLength={6}
              />
            </label>
          </div>
          <div className='half-width'>
            <h3>Espais disponibles</h3>
            <label htmlFor='public_yard'>
              <input type='checkbox' name='public_yard' id='public_yard' />
              <small>Pati comunitari</small>
            </label>
            <label htmlFor='public_garden'>
              <input type='checkbox' name='public_garden' id='public_garden' />
              <small>Jardí comunitari</small>
            </label>
            <label htmlFor='balcony'>
              <input type='checkbox' name='balcony' id='balcony' />
              <small>Balcons</small>
            </label>
            <label htmlFor='terrace'>
              <input type='checkbox' name='terrace' id='terrace' />
              <small>Terrassa</small>
            </label>
            <label htmlFor='hall'>
              <input type='checkbox' name='hall' id='hall' />
              <small>Hall</small>
            </label>
            <label htmlFor='corridor'>
              <input type='checkbox' name='corridor' id='corridor' />
              <small>Passadissos</small>
            </label>
            <label htmlFor='others'>
              <input
                type='text'
                name='others'
                id='others'
                placeholder='Altres'
              />
            </label>
          </div>
        </section>
        <section className='form-block'>
          <h2>2.- Escull el node que us agradaria fer</h2>
          <div>
            <label htmlFor='node_type'>
              <select name='node_type' id='node_type'>
                <option value='node_type_sport'>Node Esport</option>
                <option value='node_type_culture'>Node Cultura</option>
                <option value='node_type_botanic'>Node Botànic</option>
                <option value='node_type_education'>Node Educació</option>
                <option value='node_type_social'>Node Social</option>
              </select>
            </label>
          </div>
        </section>
        <section className='form-block'>
          <h2>3.- Defineix el node</h2>
          <div>
            <label htmlFor='project_name'>
              <input
                type='text'
                name='project_name'
                id='project_name'
                placeholder='Nom del projecte'
              />
            </label>
            <label htmlFor='description'>
              <textarea
                name='description'
                id='description'
                placeholder='Descripció del projecte'
                maxLength={340}
                minLength={220}
                cols={30}
                rows={10}
              />
            </label>
            <label htmlFor='project_phase'>
              <input
                type='text'
                name='project_phase'
                id='project_phase'
                placeholder='Estat del projecte (en quina fase es troba?)'
              />
            </label>
            <label htmlFor='next_steps'>
              <textarea
                name='next_steps'
                id='next_steps'
                placeholder='Properes passes'
                maxLength={340}
                minLength={220}
                cols={30}
                rows={10}
              />
            </label>
          </div>
          <div className='half-width'>
            <h3>Perfils públics de l'equip</h3>
            <label htmlFor='web'>
              <input
                type='url'
                name='web'
                id='web'
                placeholder='https://example.com'
                pattern='https://.*'
                size='50'
              />
              <small>Web</small>
            </label>
            <label htmlFor='twitter'>
              <input
                type='url'
                name='twitter'
                id='twitter'
                placeholder='https://twitter.com/nodevidcultural'
                pattern='https://.*'
                size='50'
              />
              <small>Twitter</small>
            </label>
            <label htmlFor='facebook'>
              <input
                type='url'
                name='facebook'
                id='facebook'
                placeholder='https://www.facebook.com/nodevidcultural'
                pattern='https://.*'
                size='50'
              />
              <small>Facebook</small>
            </label>
          </div>
        </section>
        <section className='form-block'>
          <h2>3.- Acceptació</h2>
          <div>
            <h3>Tens el suport de la resta del veïnatge</h3>
            <label htmlFor='neightbours_support'>
              <select name='neightbours_support' id='neightbours_support'>
                <option value='neightbours_support_yes'>Sí</option>
                <option value='neightbours_support_no'>No</option>
                <option value='neightbours_support_ns_nc'>Ns / Nc</option>
              </select>
            </label>
          </div>
          <div className='half-width'>
            <label htmlFor='rules_commitment'>
              <p>
                Et compromets a respectar les normes de convivència i horaris
                marcats per la teva comunitat?
              </p>
              <input
                type='checkbox'
                name='rules_commitment'
                id='rules_commitment'
              />
            </label>
            <label htmlFor='accept'>
              <p>
                Accepta les bases legals i la política de privacitat
                <br />
                <small>
                  <Link href='/legal'>
                    <a
                      title='Consultat les bases legals i la política de privacitat'
                      className='important'>
                      Llegiex les bases legals
                    </a>
                  </Link>
                </small>
              </p>
              <input type='checkbox' name='isAccepted' id='isAccepted' />
            </label>
          </div>
        </section>
        <section className='form-block'>
          <button
            className='button'
            disabled={!this.props.emailIsValid || !this.props.isAccepted}>
            Dona't d'alta!
          </button>
        </section>

        <style jsx>{`
          .form {
            display: flex;
            flex-wrap: wrap;
            max-width: 960px;
            margin-top: 3rem;
            align-items: center;
            justify-content: center;
          }
          .form-block {
            margin: 1rem;
            flex-basis: 100%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
          }
          input,
          textarea,
          select,
          option,
          button {
            display: block;
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem;
          }
          .button {
            cursor: pointer;
          }
          .button[disabled] {
            cursor: not-allowed;
          }
          .half-width input[type='checkbox'] {
            width: 50%;
            display: inline-block;
          }

          @media (max-width: 600px) {
            .form {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (min-width: 1024px) {
            .half-width label {
              width: 50%;
              display: inline-block;
            }
            .half-width input,
            .half-width textarea {
              display: inline-block;
              width: 50%;
            }
            .half-width input[type='checkbox'] {
              width: 15%;
            }
          }
        `}</style>
      </form>
    );
  }
}

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team_name: '',
      lead_member_name: '',
      lead_member_email: '',
      lead_member_phone: '',
      lead_member_description: '',
      lead_member_nickname: '',
      second_member_name: '',
      second_member_email: '',
      second_member_description: '',
      second_member_nickname: '',
      city: '',
      address: '',
      postal_code: 0,
      total_blocks: 0,
      public_yard: false,
      public_garden: false,
      balcony: false,
      terrace: false,
      hall: false,
      corridor: false,
      others: '',
      node_type: '',
      project_name: '',
      description: '',
      project_phase: '',
      next_steps: '',
      web: '',
      twitter: '',
      facebook: '',
      neightbours_support: '',
      rules_commitment: false,
      emailIsValid: false,
      submitted: false,
      isAccepted: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validateEmail = () => {
    this.setState({
      emailIsValid: validator.validate(this.state.lead_member_email),
    });
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    this.validateEmail();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      team_name,
      lead_member_name,
      lead_member_email,
      lead_member_phone,
      lead_member_description,
      lead_member_nickname,
      second_member_name,
      second_member_email,
      second_member_description,
      second_member_nickname,
      city,
      address,
      postal_code,
      total_blocks,
      public_yard,
      public_garden,
      balcony,
      terrace,
      hall,
      corridor,
      others,
      node_type,
      project_name,
      description,
      project_phase,
      next_steps,
      web,
      twitter,
      facebook,
      neightbours_support,
      rules_commitment,
    } = this.state;

    axios({
      method: 'get',
      url: `${formUrl}?team_name=${encodeURIComponent(
        team_name
      )}&lead_member_name=${encodeURIComponent(
        lead_member_name
      )}&lead_member_email=${encodeURIComponent(
        lead_member_email
      )}&lead_member_phone=${encodeURIComponent(
        lead_member_phone
      )}&lead_member_description=${encodeURIComponent(
        lead_member_description
      )}&lead_member_nickname=${encodeURIComponent(
        lead_member_nickname
      )}&second_member_name=${encodeURIComponent(
        second_member_name
      )}&second_member_email=${encodeURIComponent(
        second_member_email
      )}&second_member_description=${encodeURIComponent(
        second_member_description
      )}&second_member_nickname=${encodeURIComponent(
        second_member_nickname
      )}&city=${encodeURIComponent(city)}&address=${encodeURIComponent(
        address
      )}&postal_code=${encodeURIComponent(
        postal_code
      )}&total_blocks=${total_blocks}&public_yard=${encodeURIComponent(
        public_yard
      )}&public_garden=${encodeURIComponent(
        public_garden
      )}&balcony=${encodeURIComponent(balcony)}$terrace=${encodeURIComponent(
        terrace
      )}&hall=${encodeURIComponent(hall)}&corridor=${encodeURIComponent(
        corridor
      )}&others=${encodeURIComponent(others)}&node_type=${encodeURIComponent(
        node_type
      )}&project_name=${encodeURIComponent(
        project_name
      )}&description=${encodeURIComponent(
        description
      )}&project_phase=${encodeURIComponent(
        project_phase
      )}&next_steps=${encodeURIComponent(next_steps)}&web=${encodeURIComponent(
        web
      )}&twitter=${encodeURIComponent(twitter)}&facebook=${encodeURIComponent(
        facebook
      )}&neightbours_support=${encodeURIComponent(
        neightbours_support
      )}&rules_commitment=${encodeURIComponent(rules_commitment)}`,
    });

    this.setState({ submitted: true });
  };

  render() {
    const { emailIsValid, submitted, isAccepted } = this.state;

    return (
      <>
        {submitted ? (
          <div className='align-center'>
            <ThankYou />
          </div>
        ) : (
          <SubscriptionForm
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            emailIsValid={emailIsValid}
            isAccepted={isAccepted}
          />
        )}

        <style jsx>{`
          .align-center {
            text-align: center;
          }
        `}</style>
      </>
    );
  }
}

export default AppForm;
