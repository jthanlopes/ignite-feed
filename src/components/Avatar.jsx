import styles from './Avatar.module.css';

export function Avatar({src, hasBorder = true}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorders : styles.avatar }
      src={src}
      alt="Imagem de perfil do usuário"
    />
  );
}